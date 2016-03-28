/*
 * Defines variable at block-level
 */

// LOOPS
var x = 0;

if (true) { // will always be true
  var x = 12;
  console.log(x); // 12 — variable hoisting
}

console.log(x); // 12
console.log("*****************************");



var y = 0; 

if (true) {
  let y = 12;
  console.log(y); // 0 — y defined inside block
}

console.log(y);
console.log("*****************************");



for (var i=0; i<3; i++) {
  console.log(`for loop: i = ${i}`); 
}
console.log(i); // 3 — var i is available outside of the loop
console.log("*****************************");


for (let j=0; j<3; j++) {
  console.log(`for loop: i = ${j}`); 
}
// console.log(j); // var j is not available outside of the loop *crash* 
console.log("*****************************");



// FUNCTIONS
function genCallback () {
  let name = 'Adam';
  
  return function () {
    console.log(`Hello ${name}!`);
  }
}

genCallback()(); // genCallback returns a function. Call it with second set of ();