let user = {
  name: 'John',
  age: 30
};
function count(obj) {
  return Object.keys(obj).length;
}
alert(count(user));