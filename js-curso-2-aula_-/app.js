let randomNumber = randomNumberGenerator();
let btnGuess = document.querySelector(".container__botao");
let chances = 1;

console.log(randomNumber);

function showTextOnScreen(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

showTextOnScreen("h1", "Jogo do número secreto");
showTextOnScreen("p", "Escolha um número entre 1 e 100");

function clearText() {
  guess = document.querySelector("input");
  guess.value = "";
}

function validateGuess() {
  let guess = document.querySelector("input").value;
  if (guess == randomNumber) {
    showTextOnScreen("h1", "Acertou!");
    let trysText = chances > 1 ? "tentativas" : "tentativa";
    let chancesText = `Você acertou o número secreto com ${chances} ${trysText}`;
    showTextOnScreen("p", chancesText);
  } else {
    if (guess > randomNumber) {
      showTextOnScreen("p", "O número secreto é menor! ");
    } else {
      showTextOnScreen("p", "O número secreto é maior!");
    }
    chances++;
    clearText();
  }
}

function randomNumberGenerator() {
  return parseInt(Math.random() * 10 + 1);
}
