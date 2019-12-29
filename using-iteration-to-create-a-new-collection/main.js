// This array should end up with potato pieces in it
const potatoPieces = [];

const wholePotatoes = [
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato"
];


// Write a loop to iterate over each item in `wholePotatoes`
for (let i = 0; i < wholePotatoes.length; i++) {
  // Add the string "potato piece" 5 times into the `potatoPieces` array
  for (let j = 0; j < 5; j++){
  	potatoPieces.push("potato piece");
  }
}


// This should display the right number of pieces
console.log(potatoPieces.length);
