let date = new Date(2012, 0, 6);

function getLocalDay(date) {
  let d = date.getDay();
  if (d == 0) {
    d = 7;
  }
  return d;
}

alert(getLocalDay(date));      