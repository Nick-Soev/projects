
function pow(x, n) {
  return x ** n;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Используйте натуральное число`);
} else {
  alert(pow(x, n));
}
