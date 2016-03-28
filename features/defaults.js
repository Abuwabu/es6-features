// run with babel-node features/defaults.js --presets es2015
// or add presets to .babelrc and run with babel-node
function sayHello (name = 'World') {
  console.log("Hello " + name + "!");
}

sayHello();
sayHello('Abu');


function greetUser (user = {name: 'Anonymous'}) {
  console.log("Hello " + user.name + "!");
}

greetUser();
greetUser({ name: 'Hannah'});