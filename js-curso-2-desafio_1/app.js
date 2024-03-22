let title = document.querySelector("h1");

title.innerHTML = "It's show time, baby!";

function consoleClicked() {
  console.log("the 'Console' button was clicked");
}

function alertButton() {
  window.alert("I love JS");
}

function promptButton() {
  let city = window.prompt("Digite o nome de uma cidade: ");
  window.alert(`Estive em ${city} e lembrei de você!`)
}


function sumButton() {
    let n1 = parseInt(window.prompt("Digite o primeiro número: "))
    let n2 = parseInt(window.prompt("Digite o segundo número: "))
    let result = n1 + n2
    window.alert(`A soma de ${n1} + ${n2} é = ${result}`)
}