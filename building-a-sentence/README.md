Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Building-a-sentence

# Iterating a Collection of Words to Build a Sentence

In this exercise, you're going to iterate a collection of strings and concatenate (i.e. join) then together to form one, continuous string as a sentence. Here's an example of how you can concatenate two string in JavaScript.

```js
const family = ["Cathie", "John", "Mark", "Krista"];
let singleFamilyString = "I love my dog ";

for (let index = 0; index < family.length; index++) {
    singleFamilyString = `${singleFamilyString} and ${family[index]}`;
}
```

Just so you know, those characters are called backticks. It's a feature of JavaScript called string interpolation. That's a fancy word for a string builder. You can evaluate the value of a variable inside the backticks by wrapping the variable name in curly braces, and then placing a dollar sign at the beginning.

```js
const myDogsName = "Angus";

const message = `I love my dog ${myDogsName} so much!`;
```

You are going to be iterating over two separate arrays filled with words. Each word should be added to a single variable that holds the sentence.

If that doesn't make sense, that's ok. There's another way to concatenate strings. You can use the plus sign.

```js
const family = ["Cathie", "John", "Mark", "Krista"];
let singleFamilyString = "I love my dog ";

for (let index = 0; index < family.length; index++) {
    singleFamilyString = singleFamilyString + " and " + family[index];
}
```