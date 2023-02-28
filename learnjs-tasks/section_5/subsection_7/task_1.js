let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(arr) {
  let a = new Set(arr)
  return Array.from(a)
}
alert(unique(values));

