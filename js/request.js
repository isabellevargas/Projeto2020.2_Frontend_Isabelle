/*Busca na API fornecida os pius em formato JSON e os converte. Depois, chama uma função para adicionar eles a 
timeline*/

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    var resposta = xhr.responseText;
    var users = JSON.parse(resposta);

    console.log(users);

    users.forEach(function (user) {
      adicionaTweet(user);
    });
  } else {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
});

xhr.send();
