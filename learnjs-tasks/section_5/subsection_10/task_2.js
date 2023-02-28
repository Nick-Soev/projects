let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(s) {
  let max = 0;
  let maxName = '';
  for (const [name, sal] of Object.entries(s)) {
    if (max < sal) {
      max = sal;
      maxName = name;
    }
  }
  return maxName;
}
console.log(topSalary(salaries));