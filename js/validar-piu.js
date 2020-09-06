var caixaDeTexto = document.querySelector("#caixa-texto");
var botao = document.querySelector("#botao-texto");
var erro = document.querySelector("#frase-erro");
var contador = document.querySelector("#contador");

caixaDeTexto.addEventListener("input", function () {
  var texto = caixaDeTexto.value;

  if (texto.length == 0) {
    botao.disabled = true;
    botao.style.opacity = 0.5;
    erro.textContent = "O piu está vazio";
    contador.textContent = texto.length + "/140";
  } else if (texto.length > 140) {
    caixaDeTexto.classList.add("caracteres-excedidos");
    botao.disabled = true;
    botao.style.opacity = 0.5;
    erro.textContent = "Caracteres em excesso";
    contador.textContent = texto.length + "/140";
    contador.classList.add("caracteres-excedidos");
  } else {
    caixaDeTexto.classList.remove("caracteres-excedidos");
    botao.disabled = false;
    botao.style.opacity = 1;
    erro.textContent = "";
    contador.textContent = texto.length + "/140";
    contador.classList.remove("caracteres-excedidos");
  }
});
