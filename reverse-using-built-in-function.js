// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  let splitString = str.split("");
  let reversedarray = splitString.reverse();
  let expectedarray = reversedarray.join("");
  return expectedarray;
};

module.exports = reverse;
