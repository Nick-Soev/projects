const d = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
let date = new Date(2012, 0, 3);
function getWeekDay(date) {
  return d[date.getDay()];
}
alert(getWeekDay(date));


