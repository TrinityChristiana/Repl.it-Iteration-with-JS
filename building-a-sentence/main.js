let sentence = "";

/*
    Add all of the words in this array to the sentence. Use string interpolation or the plus sign.
    Make sure you add a space in between each word.
*/
const loveRelationship = ["I", "love", "sitting", "on", "the", "beach", "in", "the", "summer"];

for (let i = 0; i < loveRelationship.length; i++) {
  sentence = `${sentence} ${loveRelationship[i]}`;
}

/*
    Add all of the words in this array to the sentence.
*/
const hateRelationship = ["but", "I", "hate", "spending", "the", "next", "two", "days", "with", "sunburn"];

for (let i = 0; i < hateRelationship.length; i++) {
  sentence = `${sentence} ${hateRelationship[i]}`;
}

/*
  After you sentence is built, display it with `console.log()`
*/
console.log(sentence);