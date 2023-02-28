let calculator = {
  read() {
    this.a = prompt("Первое число", 0);
    this.b = prompt("Второе число", 0);
  },
  sum() {
    return +this.a + +this.b;
  },
  mul() {
    return +this.a * +this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
