let randomNumber = randomNumberGenerator();
let btnGuess = document.querySelector(".container__botao");

function showTextOnScreen(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

showTextOnScreen("h1", "Jogo do número secreto");
showTextOnScreen("p", "Escolha um número entre 1 e 100");

function validateGuess() {
  let guess = document.querySelector("input").value;
  if (guess == randomNumber) {
    showTextOnScreen("h1", "Acertou!");
    showTextOnScreen("p", "Você acertou o número secreto!");
  } else {
    if (guess > randomNumber) {
      showTextOnScreen("p", "O número secreto é menor! ");
    } else {
      showTextOnScreen("p", "O número secreto é maior!");
    }
  }
}

function randomNumberGenerator() {
  return parseInt(Math.random() * 10 + 1);
}
