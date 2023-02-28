function getSecondsToday() {
  const date = new Date();
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round((date - start) / 1000);
}
alert(getSecondsToday());
