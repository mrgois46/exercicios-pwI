let idade = Number(prompt("Digite sua idade:"));
let valor = Number(prompt("Digite o valor:"));

if (idade >= 18) valor *= 0.9;

alert("Valor com desconto: " + valor);