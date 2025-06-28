let soma = 0;
let n;

do {
  n = Number(prompt("Digite um número (0 para parar):"));
  soma += n;
}
while (n !== 0);

alert("Soma: " + soma);