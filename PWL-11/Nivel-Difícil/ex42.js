let palavra = prompt("Digite uma palavra:").toLowerCase();
let vogais = palavra.match(/[aeiou]/g);

alert("Quantidade de vogais: " + (vogais ? vogais.length : 0));