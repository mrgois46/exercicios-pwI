let ano = Number(prompt("Digite o ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  alert("Ano bissexto");
}
else {
  alert("Não é bissexto");
}