var botaoBusca = document.querySelector("#botao-busca");
var formBusca = document.querySelector("#form-busca");

botaoBusca.addEventListener("click", function (event) {
  event.preventDefault();

  var users = document.querySelectorAll(".user-tweet");

  var pesquisa = formBusca.busca.value;

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
