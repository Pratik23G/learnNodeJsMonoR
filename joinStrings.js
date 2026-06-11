let firstName = "Pratik";
let lastName = "Gurung";
let thisYear = 2026;
let birthYear = 2002;

let greetings =
  "Hello " +
  firstName +
  " " +
  lastName +
  ".It is " +
  thisYear +
  " and by age you are " +
  (birthYear - thisYear) +
  " years old ";

console.log(greetings);

module.exports = { firstName, lastName, thisYear, birthYear, greetings };
