// Reduce function usage

function aggregate(arr) {
  var sum = arr.reduce(function (prev, curr) {
    var next = prev + curr;
    return next;
  }, 0);
  return sum;
}

function mutliply(arr) {
  const product = arr.reduce((prev, curr) => {
    const next = prev * curr;
    return next;
  }, 1);
  return product;
}

function segregation(arr) {
  const segregate = arr.reduce((prev, curr) => {
    const floored = Math.floor(curr);
    if (!prev[floored]) {
      prev[floored] = [];
    }
    prev[floored].push(curr);
    return prev;
  }, {});
  return segregate;
}

// console.log(segregation([1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 2.1, 2.4]));

// Output
// {
//     '1': [1.1, 1.2, 1.3, 1.4, 1.3, 1.2],
//         '2': [2.1, 2.4]
// }

// Run in Sequence

const upperCase = (str) => str.toUpperCase();
const reverse = (str) => str.split("").reverse().join("");
const append = (str) => "Hello" + " " + "Modified String:" + " " + str;

const functions = [upperCase, reverse, append]; //array of functions

const valueAfterPiping = (arr) => {
  const finalValue = arr.reduce((prev, curr) => {
    return curr(prev);
  }, "Piping - Pass a value to string and after going through array of functions return modified string");
  return finalValue;
};

// console.log(valueAfterPiping(functions));

// Output
// Hello Modified String: GNIRTS DEIFIDOM NRUTER SNOITCNUF FO YARRA HGUORHT GNIOG RETFA DNA GNIRTS OT EULAV A SSAP - GNIPIP
