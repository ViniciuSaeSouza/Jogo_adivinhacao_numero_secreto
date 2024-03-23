function calcularIMC(alturaEmMetros, pesoEmQuiloGramas) {
  let imc = pesoEmQuiloGramas / (alturaEmMetros * alturaEmMetros);
  return imc;
}

function calularFatorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i=2; i <= numero; i++){
    numero *= i;
  }
  return fatorial
}

let numero = 5
let resultado = calcularFatorial(numero);

console.log(`O fatorial de ${numero} é ${resultado}`);
