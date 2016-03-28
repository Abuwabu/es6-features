/*
 * Template Strings use the back tick ``
 * And ${} to use js expressions inline
 */

function greet(name = 'Adam') {
  console.log(`Hello ${name}!`);
}

greet();
greet('Hannah');

// Basic Maths
console.log(`1 + 6 = ${1+6}`);

// Keeps the new line characters
console.log(`
  Hey! How're you ?
  This kinda looks like an email, dunnit?

  - Adam
`);

// Challenge
var person = {
  name: 'Adam',
  age: 43
}

function greetPerson(person = {
  name: 'Anonymous',
  age: 0
}) {
  console.log(`Hey ${person.name}! You're ${person.age}`);
}

greetPerson(person);
greetPerson();