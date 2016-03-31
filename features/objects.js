// The old-fashiond way
var age = 43;
var person_old = {
  name: 'Adam',
  age: age
};


// NEW-FANGLED MAGICKY
function printHello() {
  console.log('Hello!');
}
var person = {
  name: 'Adam',

  // Added Shortcuts
  age,
  printHello,

  // Generate property names based on variables
  ['hello' + (age + 2)]: "I am here.",

  // Function declaration shorthand
  printAge () {
    console.log(this.age);
  }
};

console.log(person);
person.printHello();
console.log(person.hello45);
person.printAge();



