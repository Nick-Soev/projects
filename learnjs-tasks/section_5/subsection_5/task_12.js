let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let arr = []
function unique(str) {
  str.forEach(i => {
    if (!arr.includes(i)) {
      arr.push(i)
    }
  });
  return arr;
}
alert(unique(strings));
