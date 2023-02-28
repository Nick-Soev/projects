let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(a) {
  let map = new Map();
  for (let i of a) {
    let sor = i.toLowerCase().split("").sort().join(""); // (*)
    map.set(sor, i);
  }
  return Array.from(map.values());
}
alert(aclean(arr));

