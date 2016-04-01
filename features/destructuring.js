/**
 * DESTRUCTURING
 * Most useful in function arguments, 
 * and function return arguments
 */



// PULL OUT ITEM IN ARRAY TO VARIABLES
var array = ['first', 'second', 'third'];
var [a, b, c] = array;
console.log(a, b, c);

// Can leave out some elements
var [d, , e] = array;
console.log(d, e);


// ALSO WORKS WITH OBJECTS
var todo = {
  description: 'Go skiiing',
  completed: false
};

var {description} = todo;
console.log(description);

// Can pull out the description property but give it a new name
var {description: message} = todo;
console.log(message);

// Can pull out multiple variables
var {description: message, completed} = todo; 
console.log(message, completed);
console.log('****************');



// DESTRUCTURING FUNCTION ARGUMENTS
// Only interested in todo.completed of todo obj.
// Can add curly braced righ in function args.
function getTodoStatus1({completed}) {
  if (typeof completed === 'boolean') {
    console.log(`Todo is ${completed ? '' : 'not'} completed`);
  } else {
    console.log('Todo error. Not valid');
  }
}

getTodoStatus1(todo); 
console.log('****************');



// DESTRUCTURING FUNCTION RETURNS
// Often want to return 2 different things from a function:
// One if things went well, and another if they didn't
function getTodoStatus({completed}) {
  if (typeof completed === 'boolean') {
    return [`Todo is ${completed ? '' : 'not'} completed`];
  } else {
    return [undefined, { error: 'INVALID_TODO_ITEM' }];
  }
}

var [res, err] = getTodoStatus(todo); 

if (err) {
  console.log(err.error);
} else {
  console.log(res);
}

