Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Simple-iteration-of-a-collection

# Iteration

What is iteration? For software developers, it is defined as...
> *The process of repeating a set of instructions a specified number of times or until a specific result is achieved.*

Since our jobs entail largely of reading large amounts of data and making that raw data consumable to human beings, we find ourselves performing many kinds of iteration.

- Displaying all items in a collection of things
- Filtering out certain items in a collection
- Modifying the items in a collection and putting the modified item into another collection

Consider the following process that many people have done at some point in their lives.

It's Thanksgiving time!! Someone needs to make the mashed potatoes, and there's a sack of 20 potatoes sitting on the kitchen counter. Even though the task is boring, it's an easy one. You pull one potato out of the bag, peel the skin off, rinse it, place it in the pot to be mashed, and then repeat the process all over again until the number of potatoes in the bag is at 0.

Here's how a software developer would represent that real-world process with JavaScript code. Specifically using a `for` loop.

```js
// The mashing pot starts empty
const mashingPot = []

// The bag contains the 20 potatoes
const bag = ["potato", "potato", "potato", "potato", "potato", 
             "potato", "potato", "potato", "potato", "potato", 
             "potato", "potato", "potato", "potato", "potato", 
             "potato", "potato", "potato", "potato", "potato"];


for (let taskCount = 0; taskCount < bag.length; taskCount++) {
    const currentPotato = bag[taskCount];
    peel(currentPotato);
    rinse(currentPotato);
    mashingPot.push(currentPotato); // The push() method adds something to an array
}
```

Don't worry at all if all of this code doesn't make sense. It's just to let you see how a real-world process might look as JavaScript code. The key part that you will be using for this exercise is the for loop, so you need to understand what all of the code on that line means. 

Between the parenthesis, there are three sections of defining a `for` loop, each separated by a semi-colon. Time to look at each section.

1. `let taskCount = 0` : This is how you will define at which index in the array that you want to start your repitition, or iteration. By specifying 0, you are going to start at the first item. Array positions start at 0 instead of 1. Since there are 20 potatoes in the bacg, the last one is at position 19. This section of the for loop statement only gets executed one time, at the beginning. It never runs again.
2. `taskCount < bag.length` : This is the condition that you write that tell the loop if it needs to keep iterating. `bag.length` gets evaluated to the number 20 since that's how many items are in that array. `taskCount` starts off at 0. So the first check evaluates to `true` and the instructions to peel and rinse the potato, then put it in the mashing pot get executed.
3. `taskCount++` :  This increments the value of the variable by 1. This code gets executed **after** each iteration of the loop is performed.

Time for you to practice, and write your first for loop to see if you can match the syntax correctly.
