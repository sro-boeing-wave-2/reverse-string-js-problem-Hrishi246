// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const splitString = str.split('');
  const reversedarray = splitString.reverse();
  const expectedarray = reversedarray.join('');
  return expectedarray;
};

module.exports = reverse;
