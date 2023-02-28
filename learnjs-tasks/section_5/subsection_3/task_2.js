function checkSpam(str) {
  const s = str.toLowerCase()
  if (s.includes('viagra') || s.includes('xxx')) {
    return false;
  }
  return true;
}
console.log(checkSpam('buy viaGra now'));

