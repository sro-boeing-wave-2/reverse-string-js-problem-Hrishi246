// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
  let newstring = '';
  let i;
  for (i = str.length - 1; i >= 0; i -= 1) {
    newstring += str[i];
  }
  return newstring;
};

module.exports = reverse;
