let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];
let usersById = groupById(users);
function groupById(user) {
  return user.reduce((acc, us) => {
    acc[us.id] = us;
    return acc;
  }, {})
}
console.log(usersById);

