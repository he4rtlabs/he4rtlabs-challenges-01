function send(){
    
    var horasDiarias = document.getElementById("horasDiarias").value;
    var diasEfetivos = document.getElementById("diasEfetivos").value;
    var diasFerias = document.getElementById("diasFerias").value;
    var valorProjeto = document.getElementById("valorProjeto").value;

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
    
    var resultado = document.getElementById("result");
    resultado.innerHTML = valorHora;
}