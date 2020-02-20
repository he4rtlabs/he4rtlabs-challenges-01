function calcular() {

  // capturando dados
  var valorProjeto = document.getElementById("ValorTotal").value;
  var horasDiarias = document.getElementById("horasDia").value;
  var diasEfetivos = document.getElementById("diasEfetivos").value;
  var diasFerias = document.getElementById("diasFerias").value;

  let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
  console.log(valorProjeto, horasDiarias, diasEfetivos, diasFerias)
  var result = document.getElementById("result");
  if(valorHora === NaN && valorHora === String){
    alert('Apenas números são aceitos!')
  } else {
    result.style.backgroundColor = "#9363cc";
    result.style.color = "#fff"
    result.style.fontWeight = "bold";
    result.style.fontSize = "24px"
    result.style.fontFamily = "Roboto, sans-serif";
    result.innerHTML = `Valor por Hora: R$ ${valorHora}`;
  }
    
}


/*
function calcular(){

  let valor1 = document.querySelector("input.valor1");
  
  let valor2 = document.querySelector(".valor2");

  let valor3 = document.querySelector(".value3");

  let valor4 = document.querySelector(".valor4");
  
  let valorProjeto = parseInt(valor1.value)
  let horasDiarias = parseInt(valor2.value)
  let diasEfetivos = parseInt(valor3.value)
  let diasFerias = parseInt(valor4.value);

  let soma = valorProjeto + horasDiarias + diasEfetivos + diasFerias;
  console.log(soma);
  
  
  
  let resultado = document.getElementById('result');
  console.log(valorHora);
  resultado.innerHTML = `Valor da hora trablhada ${valorHora}`;
}
*/