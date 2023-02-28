let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let timeMessages = new WeakMap();

timeMessages.set( messages[0], new Date() );
timeMessages.set( messages[1], new Date() );
timeMessages.set( messages[2], new Date() );