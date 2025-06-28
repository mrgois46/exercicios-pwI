let secreto = Math.floor(Math.random() * 10) + 1;
let tentativa;

do {
  tentativa = Number(prompt("Adivinhe o número (1-10):"));
}
while (tentativa !== secreto);

alert("Acertou!");