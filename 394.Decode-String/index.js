/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
  let result = '';
  let num = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '[') {
      let count = 1;
      let j = i + 1;
      while (count > 0) {
        if (s[j] === '[') {
          count++;
        } else if (s[j] === ']') {
          count--;
        }
        j++;
      }
      let subString = decodeString(s.substring(i + 1, j - 1));
      result += subString.repeat(num);
      num = 0;
      i = j - 1;
    } else {
      result += s[i];
    }
    i++;
  }
  return result;
}

// console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('sa3[sa4[qa]]qz2[qa]'));
// console.log(decodeString('100[leetcode]'));
