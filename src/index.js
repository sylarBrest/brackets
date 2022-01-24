module.exports = function check(str, bracketsConfig) {
  let res = bracketsConfig.join(',').split(',').join('');
  let brackets = [];
  for (let i = 0; i < res.length; i += 2) {
    brackets.push(res.slice(i, i + 2));
  }
  let base = true;
  let restLength = str.length;
  while (base) {
    restLength = str.length;
    for (let i = 0; i < brackets.length; i++) {
      str = str.replace(brackets[i],'');
    }
    if (restLength === str.length) {
      base = false;
    }
  }
  return (str.length === 0);
}