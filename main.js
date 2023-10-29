function Converter() {
    var valoElemento = document.getElementById("valor");
    var valor = valoElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 4.99;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "DOLAR hoje é igual reais R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var valorEmReal = valorEmDolarNumerico * 5.27;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
    var valorConvertido =
      "EURO hoje é igual reais R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }