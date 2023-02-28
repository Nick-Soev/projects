let login = prompt("Укажите ваш логин", "");

if (login === "Админ") {
  let password = prompt("Укажите пароль", "");

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Неверный пароль");
  } else {
    alert("Отменено");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
