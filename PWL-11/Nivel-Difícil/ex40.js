let a = Number(prompt("Lado A:"));
let b = Number(prompt("Lado B:"));
let c = Number(prompt("Lado C:"));

if (a + b > c && a + c > b && b + c > a) {
  alert("Forma um triângulo");
}
else {
  alert("Não forma triângulo");
}