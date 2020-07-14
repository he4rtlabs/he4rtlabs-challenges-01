const buttonCalculate = document.querySelector('.button-calculate');
const buttonReset = document.querySelector('.button-reset');

function calculateValues(e) {
  e.preventDefault();

  const hoursDaily = Number(document.querySelector('#hours-daily').value);
  const daysWorked = Number(document.querySelector('#days-worked').value);
  const vacationDays = Number(document.querySelector('#vacation-days').value);
  const projectValue = Number(document.querySelector('#project-value').value);

  if (!hoursDaily || !daysWorked || !vacationDays || !projectValue) {
    alert('Por favor, preencha todos os campos com um valor válido.');
    resetValues(e);

    return;
  }

  const hourValue = (projectValue / (daysWorked * 4 * hoursDaily)) + ((vacationDays * daysWorked * hoursDaily));

  setResultValue(hourValue);
}

function resetValues(e) {
  e.preventDefault();

  document.querySelector('.form').reset();
  setResultValue(0);
}

function setResultValue(value) {
  const resultValue = document.querySelector('.result-value');

  resultValue.innerHTML = formateValueToReal(value);
}

function formateValueToReal(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

buttonCalculate.addEventListener('click', calculateValues);
buttonReset.addEventListener('click', resetValues);
