/* Função que é responsável por controlar os likes de um piu. Se o array que registra os likes do usuário 
naquele piu estiver com 0 na posição correspondente ao id, significa que o piu não foi curtido pelo usuário ainda.
Ele pode curtir e o icon de estrela ficará preenchido. Se estiver com 1, o piu já foi curtido e só é possível descutir,
retornando o icon para o formato "vazado"*/
function curtir(id) {
  var objeto = document.querySelector("#likes-" + id);
  var icon = document.querySelector("#icon-favoritar-" + id);
  if (arr[id] == 0) {
    var likesAntigos = parseInt(objeto.textContent);
    var likesAtuais = likesAntigos + 1;
    objeto.innerHTML = likesAtuais;
    icon.src = "/images/003-favourite 2.svg";
    arr[id] = 1;
  } else {
    var likesAntigos = parseInt(objeto.textContent);
    var likesAtuais = likesAntigos - 1;
    objeto.innerHTML = likesAtuais;
    icon.src = "/images/003-favourite 1.svg";
    arr[id] = 0;
  }
}

/*Função que excluir um piu com base no id recebido ao clicar no icon de lixo*/
function excluir(id) {
  var objeto = document.querySelector("#tweet-" + id);
  objeto.remove();
}
