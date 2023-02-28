function camelize(str) {
  console.log(
    str.split('-').map((i, ind) => {
      return ind == 0 ? i : i[0].toUpperCase() + i.slice(1)
    }).join('')
  );
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");



