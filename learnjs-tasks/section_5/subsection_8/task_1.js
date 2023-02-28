let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMes = new WeakSet();
readMes.add(messages[0]);
readMes.add(messages[1]);
readMes.add(messages[0]);
alert("Read message 0: " + readMes.has(messages[0])); // true

messages.shift();