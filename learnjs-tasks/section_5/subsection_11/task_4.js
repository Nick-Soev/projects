let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  let copy = new Date(date);
  copy.setDate(date.getDate() - days);
  return copy.getDate();
}

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365)); 