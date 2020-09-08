var jaTemLike = 0;

function curtir(id) {
  var objeto = document.querySelector("#likes-" + id);
  var icon = document.querySelector("#icon-favoritar-" + id);
  if (jaTemLike == 0) {
    var likesAntigos = parseInt(objeto.textContent);
    var likesAtuais = likesAntigos + 1;
    objeto.innerHTML = likesAtuais;
    icon.src = "/images/003-favourite 2.svg";
    jaTemLike = 1;
  } else {
    var likesAntigos = parseInt(objeto.textContent);
    var likesAtuais = likesAntigos - 1;
    objeto.innerHTML = likesAtuais;
    icon.src = "/images/003-favourite 1.svg";
    jaTemLike = 0;
  }
}
function excluir(id) {
  var objeto = document.querySelector("#tweet-" + id);
  objeto.remove();
}
