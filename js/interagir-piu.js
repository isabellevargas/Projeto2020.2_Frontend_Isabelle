function curtir(id) {
  var objeto = document.querySelector("#likes-" + id);
  var likesAntigos = parseInt(objeto.textContent);
  var likesAtuais = likesAntigos + 1;
  objeto.innerHTML = likesAtuais;
}
function excluir(id) {
  var objeto = document.querySelector("#tweet-" + id);
  objeto.remove();
}
