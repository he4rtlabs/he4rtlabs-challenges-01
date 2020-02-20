import sys

from pylint.exceptions import UnknownMessageError


def get_class(module_name, kls):
    parts = kls.split('.')
    m = __import__(module_name)
    for mp in module_name.split('.')[1:]:
        m = getattr(m, mp)
    klass = getattr(m, parts[0])
    return klass


class NoSuchChecker(Exception):

    def __init__(self, checker_class):
        self.message = "Checker class %s was not found" % checker_class

    def __repr__(self):
        return self.message


def get_checker(linter, checker_class):
    for checker in linter.get_checkers():
        if isinstance(checker, checker_class):
            return checker
    raise NoSuchChecker(checker_class)


def augment_visit(linter, checker_method, augmentation):
    """
    Augmenting a visit enables additional errors to be raised (although that case is
    better served using a new checker) or to suppress all warnings in certain circumstances.

    Augmenting functions should accept a 'chain' function, which runs the checker method
    and possibly any other augmentations, and secondly an Astroid node. "chain()" can be
    called at any point to trigger the continuation of other checks, or not at all to
    prevent any further checking.
    """

    if sys.version_info[0] <= 2:
        checker = get_checker(linter, checker_method.im_class)
    else:
        try:
            checker = get_checker(linter, checker_method.__self__.__class__)
        except AttributeError:
            checker = get_checker(linter, get_class(checker_method.__module__, checker_method.__qualname__))

    old_method = getattr(checker, checker_method.__name__)

    def augment_func(node):
        def chain():
            old_method(node)
        augmentation(chain, node)

    setattr(checker, checker_method.__name__, augment_func)


class Suppress(object):

    def __init__(self, linter):
        self._linter = linter
        self._suppress = []
        self._messages_to_append = []

    def __enter__(self):
        self._orig_add_message = self._linter.add_message
        self._linter.add_message = self.add_message
        return self

    def add_message(self, *args, **kwargs):
        self._messages_to_append.append((args, kwargs))

    def suppress(self, *symbols):
        for symbol in symbols:
            self._suppress.append(symbol)

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._linter.add_message = self._orig_add_message
        for to_append_args, to_append_kwargs in self._messages_to_append:
            # Depending on the Pylint version, the add_message API is different.
            # Either a single object called 'message' is passed, or the first argument
            # is a message symbol.
            if hasattr('symbol', to_append_args[0]):
                code = to_append_args[0].symbol
            else:
                code = to_append_args[0]
            if to_append_args[0] in self._suppress:
                continue
            self._linter.add_message(*to_append_args, **to_append_kwargs)


def supress_message(linter, checker_method, message_id, test_func):
    import warnings
    warnings.warn("'supress_message' has been deprecated in favour of the correctly-spelled 'suppress_message'",
                  DeprecationWarning)
    return suppress_message(linter, checker_method, message_id, test_func)


def suppress_message(linter, checker_method, message_id_or_symbol, test_func):
    """
    This wrapper allows the suppression of a message if the supplied test function
    returns True. It is useful to prevent one particular message from being raised
    in one particular case, while leaving the rest of the messages intact.
    """
    # At some point, pylint started preferring message symbols to message IDs. However this is not done
    # consistently or uniformly - occasionally there are some message IDs with no matching symbols.
    # We try to work around this here by suppressing both the ID and the symbol, if we can find it.
    # This also gives us compatability with a broader range of pylint versions.

    # Similarly, a commit between version 1.2 and 1.3 changed where the messages are stored - see:
    # https://bitbucket.org/logilab/pylint/commits/0b67f42799bed08aebb47babdc9fb0e761efc4ff#chg-reporters/__init__.py
    # Therefore here, we try the new attribute name, and fall back to the old version for
    # compatability with <=1.2 and >=1.3
    msgs_store = getattr(linter, 'msgs_store', linter)

    def get_message_definitions(message_id_or_symbol):
        if hasattr(msgs_store, 'check_message_id'):
            return [msgs_store.check_message_id(message_id_or_symbol)]
        # pylint 2.0 renamed check_message_id to get_message_definition in:
        # https://github.com/PyCQA/pylint/commit/5ccbf9eaa54c0c302c9180bdfb745566c16e416d
        elif hasattr(msgs_store, 'get_message_definition'):
            return [msgs_store.get_message_definition(message_id_or_symbol)]
        # pylint 2.3.0 renamed get_message_definition to get_message_definitions in:
        # https://github.com/PyCQA/pylint/commit/da67a9da682e51844fbc674229ff6619eb9c816a
        elif hasattr(msgs_store, 'get_message_definitions'):
            return msgs_store.get_message_definitions(message_id_or_symbol)
        else:
            raise ValueError('pylint.utils.MessagesStore does not have a get_message_definition(s) method')

    try:
        pylint_messages = get_message_definitions(message_id_or_symbol)
        symbols = [symbol
                   for pylint_message in pylint_messages
                   for symbol in (pylint_message.msgid, pylint_message.symbol)
                   if symbol is not None]
    except UnknownMessageError:
        # This can happen due to mismatches of pylint versions and plugin expectations of available messages
        symbols = [message_id_or_symbol]

    def do_suppress(chain, node):
        with Suppress(linter) as s:
            if test_func(node):
                s.suppress(*symbols)
            chain()
    augment_visit(linter, checker_method, do_suppress)
