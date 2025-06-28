let jogador1 = prompt("Jogador 1: pedra, papel ou tesoura?");
let jogador2 = prompt("Jogador 2: pedra, papel ou tesoura?");

if (jogador1 === jogador2) alert("Empate");
else if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
         (jogador1 === "tesoura" && jogador2 === "papel") ||
         (jogador1 === "papel" && jogador2 === "pedra")) {
  alert("Jogador 1 vence");
}
else {
  alert("Jogador 2 vence");
}