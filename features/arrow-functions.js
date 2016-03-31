var people = ['Adam', 'Hannah', 'Eva', 'Bertie'];

console.log('***');

people.forEach(function(name) {
  console.log(name);
});

console.log("\n");



/* ARROW FUNCTIONS
 * can be used to replace anonymous functions
 * in cases like above
 */


// INDIVIDUAL STATEMENTS
console.log('***');
people.forEach((name) => console.log(name));
console.log("\n");


// MULTIPLE STATEMENTS
console.log('***');

people.forEach((name) => {
  console.log('Welcome');
  console.log(name);
});

console.log("\n");


// SHORT ONE-LINE FUNCTIONS

console.log('***');

// Original function
var add = function(a, b) {
  return a + b;
}

// implicit return
var add = (a, b) => a + b;              

// explicit return
var add = (a, b) => { return a + b };   

console.log(add(2, 9));
console.log("\n");


// THIS KEYWORD DOESN'T LOSE ITS BINDING
console.log('***');

var person_doh = {
  name: 'Adam',
  likes: ['Skiing', 'Sailing', 'Programming', 'Photography'],
  generateGreeter: function() {
    return function() {

      // program bails — this.name does not refer to the name: 'Adam'
      console.log(this.name);
    }
  }
}

// workaround — set that = this
var person_that = {
  name: 'Adam',
  likes: ['Skiing', 'Sailing', 'Programming', 'Photography'],
  generateGreeter: function() {
    var that = this;

    return function() {
      console.log(that.name);
    }
  }
}

// using arrow functions this doesn't lose its binding
var person = {
  name: 'Adam',
  likes: ['Skiing', 'Sailing', 'Programming', 'Photography'],
  generateGreeter: function() {
    return () => {
      console.log(this.name);
    }
  },
  printLikes: function() {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${like}`);
    })
  }
}

// double brackets — function called returns a function, so call that too
person.generateGreeter()();


// CHALLENGE
// add printLikes to console log each like name likes like
person.printLikes();