function add(a, b) {
  return a + b;
}


// SPREAD OPERATOR
console.log(add(1, 3));

console.log(add(...[5,25]));

var numbers = [4,22];

console.log(add(...numbers));


var groupA = [33, 99];
var groupB = [11];
var unified = [0, ...groupA, ...groupB, 100];

console.log(unified);

unified.push(...[55, 35]);

console.log(unified);



// REST PARAMS
function greetUsers(group, ...names) {                // names rest param combined args into an array
  names.forEach(function (name) {              // forEach only available on arrays
    console.log(`Hello ${name}. You're part of the ${group}`);  
  })
}

greetUsers('Family', 'Adam', 'Hannah', 'Eva', 'Bertie'); // not passing an array, passing three seperate args. 



// CHALLENGE
// adder (3, 5, 7, 1) add 1st arg to every other in turn and print out
function adder(firstNum, ...secondNum) {
  secondNum.forEach(function(num) {
    console.log(`${firstNum} + ${num} = ${firstNum + num}`);
  });
}

adder(3, 2, 4, 6, 8);
