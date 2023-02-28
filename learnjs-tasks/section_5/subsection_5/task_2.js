const arr = [5, 0, 3, 8, 1, 4];
const filterRange = (arr, a, b) => {
  return arr.filter(i => i >= a && i <= b);
}
console.log(filterRange(arr, 1, 4))


