var botao = document.querySelector("#botao-texto");
var form = document.querySelector("#form-texto");
var i = 0;
var arr = [];

var caixaDeTexto = document.querySelector("#caixa-texto");

var erro = document.querySelector("#frase-erro");
var contador = document.querySelector("#contador");

/*Espera um clique no botão de piar para tentar enviar o piu*/
botao.addEventListener("click", function (event) {
  event.preventDefault();

  validaInicial();

  var tweet = obtemTweet(form);
  adicionaTweet(tweet);

  form.reset();
  contador.textContent = "0/140";
  validaInicial();
});

/* Função que pega o piu do campo de digitação*/
function obtemTweet(form) {
  var tweet = {
    nome: "Isa",
    username: "@isavargas",
    mensagem: form.mensagem.value,
    imagem: "images/isa.jpeg",
  };
  return tweet;
}

/* Função que adiciona o novo piu a timeline de pius já existentes*/
function adicionaTweet(tweet) {
  var Li = montaLi(tweet);
  Li.id = "tweet-" + i;
  i++;
  var timeline = document.querySelector("#tweets");
  timeline.prepend(Li);
}

/* Monta a estrutura geral do piu*/
function montaLi(tweet) {
  var tweetLi = document.createElement("li");
  var divFora = document.createElement("div");

  divFora.classList.add("divisao");

  divFora.appendChild(montaImagem(tweet.imagem, ""));
  divFora.appendChild(
    montaDiv(
      tweet.nome,
      tweet.username,
      tweet.mensagem,
      "nome-tweet",
      "user-tweet",
      "texto-tweet",
      "info"
    )
  );
  tweetLi.appendChild(divFora);
  tweetLi.appendChild(montaActions());

  return tweetLi;
}

/*Função que monta as actions de cada piu, atribuindo id's para cada piu de modo único*/
function montaActions() {
  var divFora = document.createElement("div");
  divFora.classList.add("actions");

  var divDentro = document.createElement("div");

  var favoritar = document.createElement("a");
  favoritar.classList.add("favoritar");
  favoritar.onclick = function () {
    curtir(this.id);
  };
  favoritar.id = i;
  var favoritarIcon = document.createElement("img");
  favoritarIcon.src = "images/003-favourite 1.svg";
  favoritarIcon.id = "icon-favoritar-" + i;
  var likes = document.createElement("p");
  likes.id = "likes-" + i;
  arr[i] = 0;

  var deletar = document.createElement("a");
  deletar.classList.add("excluir");
  deletar.onclick = function () {
    excluir(this.id);
  };
  deletar.id = i;
  var deletarIcon = document.createElement("img");
  deletarIcon.src = "images/delete 2.svg";

  var quantidade = document.createTextNode(0);
  likes.appendChild(quantidade);

  favoritar.appendChild(favoritarIcon);
  deletar.appendChild(deletarIcon);

  divDentro.appendChild(favoritar);
  divDentro.appendChild(likes);

  divFora.appendChild(divDentro);
  divFora.appendChild(deletar);

  return divFora;
}

/*Monta a div do nome, user e piu*/
function montaDiv(
  nome,
  user,
  texto,
  classeNome,
  classeUser,
  classeTexto,
  classeDiv
) {
  var div = document.createElement("div");
  div.classList.add(classeDiv);

  div.appendChild(montaStrong(nome, classeNome));
  div.appendChild(montaSpan(user, classeUser));
  div.appendChild(montaTexto(texto, classeTexto));

  return div;
}

/*Monta o texto do piu*/
function montaTexto(dado, classe) {
  var p = document.createElement("p");
  p.textContent = dado;
  p.classList.add(classe);
  return p;
}

/*Monta o icon do usuário*/
function montaImagem(dado, classe) {
  var img = document.createElement("img");
  img.src = dado;

  return img;
}

/*Monta o nome do user do piu*/
function montaStrong(dado, classe) {
  var strong = document.createElement("strong");
  strong.textContent = dado;
  strong.classList.add(classe);
  return strong;
}

/*Monta o user do piu*/
function montaSpan(dado, classe) {
  var span = document.createElement("span");
  span.textContent = dado;
  span.classList.add(classe);
  return span;
}
