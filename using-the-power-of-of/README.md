Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Using-the-Power-of-of

# Using the Power of of?
That's not a correct sentence... or is it??

There's yet another type of for loop that iterates a series of instructions for each item in an iterable collection, like an array. From one of your previous exercises, here's an example of how to implement the exact same logic, but in significantly fewer characters. Software developers love being able to do the same logic, but in less characters.

It's the `for..of` loop.


```js
let sentence = "";
const loveRelationship = ["I", "love", "sitting", "on", "the", "beach"];

for (word of loveRelationship) {
 sentence = `${sentence} ${word}`;
}
```

I don't know about you, but that code looks:

1. Easier to read
2. Easier to understand
3. Easier to write

Time for you to give it a try. This time, you have to deal with object keys.