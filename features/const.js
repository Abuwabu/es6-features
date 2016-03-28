const PORT = 3000;

console.log(PORT);

// PORT = 3001; // Will crash — PORT is read-only
// var PORT = 3001 // Will crash — duplicate declaration "PORT"



/* 
 * CONFIG is a const and cannot be updated, but
 * Object attributes are not constant and can be updated
 */

const CONFIG = {
  PORT: 3000
}

console.log(CONFIG);
CONFIG.PORT = 3001;
console.log(CONFIG);
CONFIG.NAME = 'Dave';
console.log(CONFIG);

//  CONFIG = { // CONFIG is read-only *crash*
//    PORT: 3001,
//    name: 'Adam'
//  }