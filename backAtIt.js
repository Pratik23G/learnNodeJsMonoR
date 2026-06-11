function numberCheck(usrNum) {
  if (usrNum === 6) {
    return true;
  } else {
    return false;
  }
}

module.exports = numberCheck;

console.log(numberCheck(6));

const sumAll = (...numbers) =>
  numbers.reduce((sum, current) => sum + current, 0);

const a = 1 - 1; // Freebie!!! This is the answer to "one minus one"
const b = 1 + 8;
const c = 22 * 3;
const d = 5 / 4;
const e = b - 17;
const f = sumAll(a, b, c, d, e) / 5;

// Do not edit below this line
module.exports = { a, b, c, d, e, f };

function displayResult(num) {
  console.log(num);
}

displayResult(a);
displayResult(b);
displayResult(c);
displayResult(d);
displayResult(e);
displayResult(f);
