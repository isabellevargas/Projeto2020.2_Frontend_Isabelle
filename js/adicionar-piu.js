var botao = document.querySelector("#botao-texto");
var form = document.querySelector("#form-texto");

botao.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-texto");
  var tweet = obtemTweet(form);

  adicionaTweet(tweet);
  form.reset();
});

function obtemTweet(form) {
  var tweet = {
    nome: "Isa",
    username: "@isavargas",
    mensagem: form.mensagem.value,
    imagem: "/images/gian-cescon-00ByEXKcSkA-unsplash.jpg",
  };
  return tweet;
}

function adicionaTweet(tweet) {
  var Li = montaLi(tweet);
  var timeline = document.querySelector("#tweets");
  timeline.prepend(Li);
}

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

function montaActions() {
  var divFora = document.createElement("div");
  divFora.classList.add("actions");
  var divDentro = document.createElement("div");
  var favoritar = document.createElement("a");
  favoritar.classList.add("favoritar");
  var favoritarIcon = document.createElement("img");
  var deletar = document.createElement("a");
  deletar.classList.add("excluir");
  var deletarIcon = document.createElement("img");
  var likes = document.createElement("p");

  favoritarIcon.src = "/images/003-favourite.svg";
  deletarIcon.src = "/images/delete.svg";

  var quantidade = document.createTextNode(3);
  likes.appendChild(quantidade);

  favoritar.appendChild(favoritarIcon);
  deletar.appendChild(deletarIcon);

  divDentro.appendChild(favoritar);
  divDentro.appendChild(likes);

  divFora.appendChild(divDentro);
  divFora.appendChild(deletar);

  return divFora;
}

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

function montaTexto(dado, classe) {
  var p = document.createElement("p");
  p.textContent = dado;
  p.classList.add(classe);
  return p;
}

function montaImagem(dado, classe) {
  console.log(dado);
  var img = document.createElement("img");
  //img.classList.add(classe);
  img.src = dado;

  return img;
}

function montaStrong(dado, classe) {
  var strong = document.createElement("strong");
  strong.textContent = dado;
  strong.classList.add(classe);
  return strong;
}

function montaSpan(dado, classe) {
  var span = document.createElement("span");
  span.textContent = dado;
  span.classList.add(classe);
  return span;
}