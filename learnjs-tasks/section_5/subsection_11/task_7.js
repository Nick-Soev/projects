function getSecondsToTomorrow() {
  const date = new Date();
  const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  return Math.round((tomorrow - date) / 1000);
}
alert(getSecondsToTomorrow());
