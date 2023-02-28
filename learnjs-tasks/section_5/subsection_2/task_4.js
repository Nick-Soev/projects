function randomInteger(a, b) {
  let rand = a + Math.random() * (b + 1 - a);
  return Math.floor(rand);
}
console.log(randomInteger(1, 3));



