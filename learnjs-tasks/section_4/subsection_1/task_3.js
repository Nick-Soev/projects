let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let k in salaries) {
  sum += salaries[k];
}
console.log(sum);
