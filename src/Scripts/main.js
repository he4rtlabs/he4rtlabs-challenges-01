Operacao = document.querySelector("button");

Operacao.onclick = function () {
    var inputsElements = document.querySelectorAll("input");

    var horasDiarias = parseInt(inputsElements[0].value);
    var diasEfetivos = parseInt(inputsElements[1].value);
    var diasFerias = parseInt(inputsElements[2].value);
    var valorProjeto = parseInt(inputsElements[3].value);

    var valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias))
    var elementResult = document.querySelector("p#result");

    
    elementResult.appendChild(document.createTextNode("O VALOR DA HORA É R$" + valorHora));

};

