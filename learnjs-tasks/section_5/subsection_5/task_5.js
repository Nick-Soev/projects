const arr = ["HTML", "JavaScript", "CSS"];
const sorted = copySorted(arr);
function copySorted(arr) {
  return arr.slice().sort()
}
console.log(arr, sorted);

