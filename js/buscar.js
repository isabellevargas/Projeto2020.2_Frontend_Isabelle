var botaoBusca = document.querySelector("#botao-busca");
var formBusca = document.querySelector("#form-busca");

/*Fica esperando um clique no botão para realizar a busca*/
botaoBusca.addEventListener("click", function (event) {
  event.preventDefault();

  var users = document.querySelectorAll(".user-tweet");

  var pesquisa = formBusca.busca.value;

  /*Se houver algum texto no campo de busca ele faz a verificação entre todos os users para ver se acha correspondência.
  Caso não encontre, ele retorna a mensagem.*/
  if (pesquisa.length > 0) {
    var texto = "";

    for (var i = 0; i < users.length; i++) {
      user = users[i].textContent;
      if (user == pesquisa) {
        texto = user;
        document.querySelector("#resultado").innerHTML = texto;
      }
    }

    if (texto == "") {
      var texto = "Não foi encontrado resultado";
      document.querySelector("#resultado").innerHTML = texto;
    }
  }
  formBusca.reset();
});
