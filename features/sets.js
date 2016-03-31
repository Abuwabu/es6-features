/* *
 * Sets are guaranteed to be unique
 * can't contain the same value twice
 */

var chatRooms = new Set();

// Add
chatRooms.add('Sailing');
chatRooms.add('Sailing');
chatRooms.add('Skiing');


// Size — should be 2 as 'Sailing' can't be added twice
console.log(chatRooms.size); 


// Has
console.log(`Is there a chatroom for Sailing? ${ chatRooms.has('Sailing') }`);
console.log(`Is there a chatroom for Snorkeling? ${ chatRooms.has('Snorkeling') }`);


// Delete (item)
chatRooms.delete('Skiing');
console.log(chatRooms.size);


// Clear (whole set)
chatRooms.clear();
console.log(chatRooms.size);


// Convert to Array
chatRooms.add('Sailing');
chatRooms.add('Skiing');
chatRooms.add('Photography');
chatRooms.add('Programming');
chatRooms.add({
  name: 'Adam',
  age: 43,
  spouse: 'Hannah',
  children: ['Eva', 'Bertie']
});

console.log([...chatRooms]);


// For Each
chatRooms.forEach(function(chatRoom) {
  console.log(`Found chatroom: ${ chatRoom }`);
});


// CHALLENGE
console.log('\n');
console.log("*********");
console.log("CHALLENGE");
console.log("*********");

var movies = new Set();

function addMovie (movieTitle) {
  if (movies.has(movieTitle)) {
    return console.log(`Duplicate Movie Found! ${ movieTitle } already exists`);
  }
  
  movies.add(movieTitle);
  console.log(`${ movieTitle } is successfully added to movies`);
}

addMovie('A New Hope');
addMovie('Seven');
addMovie('Seven');
addMovie('A Taste of Heaven');
addMovie('A New Hope');
