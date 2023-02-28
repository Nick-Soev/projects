let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric() {
  for (let k in menu) {
    if (typeof menu[k] === "number") {
      menu[k] *= 2;
    }
  }
}
multiplyNumeric(menu);
