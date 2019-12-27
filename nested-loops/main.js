/*
  Make sure each room in every building gets cleaned. Use `console.log()` to 
  display a message like this for each room.
  
    I cleaned the Entry way in the Office building
    
  You can use `for` loops, `for..of` loops, or a combination.
*/
const buildings = ["Office building", "Grade school", "Courthouse"];
const roomsToClean = ["Rest room", "Entry way", "Office", "Closet"];

for(let i = 0; i < buildings.length; i++){
	for(let j = 0; j < roomsToClean.length; j++){
		console.log(`I cleaned the ${roomsToClean[j]} in the ${buildings[i]}`)
	}
}