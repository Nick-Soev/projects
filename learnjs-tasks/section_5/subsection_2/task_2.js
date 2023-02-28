function readNumber() {
  let num = '';
  num = prompt('введите число', '0')
  if (!isFinite(num)) {
    readNumber();
  } else if (num === null || num === '') {
    alert(null)
  } else {
    alert(+num)
  };
}
readNumber();



