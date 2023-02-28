let vasya = { name: "Вася", age: 26 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];
function getAverageAge(a) {
  return Math.floor((a.reduce((sum, num) => sum + num.age, 0)) / arr.length)
}
alert(getAverageAge(arr));
