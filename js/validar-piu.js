var caixaDeTexto = document.querySelector("#caixa-texto");
var botao = document.querySelector("#botao-texto");
var erro = document.querySelector("#frase-erro");
var contador = document.querySelector("#contador");

validaInicial();

/*Função que é responsável por impedir o usuário de fazer um piu vazio logo ao entrar na página. */
function validaInicial() {
  if (caixaDeTexto.value == " ") {
    botao.disabled = true;
    botao.style.opacity = 0.5;
    erro.textContent = "O piu está vazio";
    contador.textContent = "0/140";
  }
  return;
}

/*Fica esperando por um input na caixa de piu. Caso esteja vazio ou tenha caracteres em excesso ele bloqueia o botão
e o usuário não pode postar. Caso tenha caracteres em excesso ele também coloca o contador em vermelho, assim como
o texto. Quando volta ao "normal" ele permite de novo a publicação. */
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
