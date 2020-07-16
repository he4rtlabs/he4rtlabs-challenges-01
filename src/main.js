function calcularHoras() {
  // capturar os valores das entradas
  let diario = parseFloat(document.getElementById("diario").value);
  let efetivos = parseFloat(document.getElementById("efetivos").value);
  let total = parseFloat(document.getElementById("total").value);
  let ferias = parseFloat(document.getElementById("ferias").value);

  // Conta para calcular valor da sua hora no projeto
  let vhoras = total / (efetivos * 4 * diario) + ferias * efetivos * diario;
  // formatar valor para moeda Brasileira
  var final = vhoras.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  // Mostrar o resultado
  document.getElementById("result").innerHTML = final;
  console.log(final);
}
