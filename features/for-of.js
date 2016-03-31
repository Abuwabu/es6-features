var locations = [];

locations.push({
  name: 'Barcelona',
  weather: 23
});

locations.push({
  name: 'London',
  weather: 10
});

for (let location of locations) {
  console.log(`It's ${location.weather} in ${location.name}.`);
}


// CHALLENGE
function averageGrade(...grades) {
  var sumOfGrades = 0;

  for (let grade of grades) {
    sumOfGrades += grade
  }
  
  return sumOfGrades / grades.length; 
}

var total = averageGrade(1, 44, 99);
console.log(total);