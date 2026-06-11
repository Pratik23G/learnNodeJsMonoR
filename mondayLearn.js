const prompt = require("readline-sync").question;
const helloworld = function () {
  return "hello World";
};

module.exports = helloworld;

helloworld;
console.log(helloworld);

function addNumbers() {
  let a = prompt("enter a valid number: ");
  let b = prompt("enter second valid number: ");

  let output = Number(a) + Number(b);
  console.log(`Th eoutput is: ${output}`);
  return output;
}

module.exports = addNumbers;
