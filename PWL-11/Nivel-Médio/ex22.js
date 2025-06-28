let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let op = prompt("Digite a operação (+, -, *, /):");

if (op === "+") alert(n1 + n2);
else if (op === "-") alert(n1 - n2);
else if (op === "*") alert(n1 * n2);
else if (op === "/") alert(n1 / n2);
else alert("Operação inválida");