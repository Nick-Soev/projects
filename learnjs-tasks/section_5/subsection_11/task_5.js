function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
alert(getLastDayOfMonth(2012, 1));
