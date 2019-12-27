/*
  Given the array of objects below, use `console.log()` so that the following
  output is generated
  
  Skipbo is a Weinereimer
  Jenkins is a Caarolina Retriever
  Dodge is a Pug
  Fizbo is a Mutt
  Angus is a Australian Shepherd
*/

const dogs = [
    { name: "Skipbo", breed: "Weinereimer" },
    { name: "Jenkins", breed: "Caarolina Retriever" },
    { name: "Dodge", breed: "Pug" },
    { name: "Fizbo", breed: "Mutt" },
    { name: "Angus", breed: "Australian Shepherd" }
]

for (value of dogs) {
  console.log(`${value.name} is a ${value.breed}`);
}
