let n = Number(prompt("Digite um número:"));
let fat = 1;

for (let i = 1; i <= n; i++) {
  fat *= i;
}

alert("Fatorial: " + fat);