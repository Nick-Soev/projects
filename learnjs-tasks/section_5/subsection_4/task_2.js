function sumInput() {
  const arr = [];
  let sum = 0;
  function numb() {
    let num = +prompt('введите число');
    if (isFinite(num)) {
      arr.push(num);
      numb();
    }
  }
  numb()
  for (let i of arr) {
    sum += i
  }
  return sum
}
alert(sumInput());


