let peso = Number(prompt("Digite o peso:"));
let altura = Number(prompt("Digite a altura:"));
let imc = peso / (altura ** 2);

if (imc < 18.5) alert("Abaixo do peso");
else if (imc < 25) alert("Peso normal");
else if (imc < 30) alert("Sobrepeso");
else alert("Obesidade");