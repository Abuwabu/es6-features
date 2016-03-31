var myMap = new Map();

// Set
myMap.set('name', 'Abu von Bondvillain');
myMap.set('age', 43);

// Get
console.log(myMap.get('name'));

// Keys
console.log(myMap.keys());

// Values
console.log(myMap.values());

// Has
console.log(myMap.has('age'));

// Delete
myMap.delete('name');
console.log(myMap.has('name'));

// Clear
myMap.clear();

// Size
console.log(myMap.size);

// KEYS CAN BE ANYTHING UNLIKE OBJECTS
var user = {
  name: 'Adam'
};

myMap.set(user, 'Barcelona');
console.log(myMap.get(user));
console.log(myMap);

console.log('\n');
console.log('****');
console.log('\n');

var myMap2 = new Map();
myMap2.set(1, 'Adam');
myMap2.set(2, 'Hannah');
myMap2.set(3, 'Eva');
myMap2.set(4, 'Bertie');

console.log([...myMap2]);
console.log(myMap2.keys());
console.log(myMap2.values());



// CHALLENGE
console.log('\n');
console.log('**** CHALLENGE ****');
console.log('\n');


var location = { name: 'Barcelona' };
var location2 = { name: 'London' };
var weatherMap = new Map();


function setWeather(location, temp) {
  weatherMap.set(location, temp);
}

function printWeather(loc) {
  // use 'has' to see if weather recorded for location
  // print nice message || no weather recorded for that area
  if (weatherMap.has(loc)) {
    console.log(`It's ${weatherMap.get(loc)} in ${loc.name}`);
  } else {
    console.log(`No weather recorded for ${loc.name}`);
  }
}

setWeather(location, 25);
printWeather(location);
printWeather(location2);