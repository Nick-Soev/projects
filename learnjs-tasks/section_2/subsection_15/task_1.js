// 1
function checkAge1(age) {
  return age > 18 ? true : confirm('Родители разрешили?');

  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
// 2
function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}