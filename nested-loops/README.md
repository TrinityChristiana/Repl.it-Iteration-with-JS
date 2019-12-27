Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Nested-loops

# Nested Loops to Iterate two Collections
You are lovingly preparing dinner for your family. You made sure that you cooked a delicious, yet healthy meal, and also bought a bottle of wine for everyone to enjoy. Now it's time to prepare everyone's plate and get dinner on the table. You want to make sure that each person's plate get all of the food on it.

Here's how a software developer sees the automation of the task. I'm going to combine a vanilla for loop and a `for..of` loop.

```js
const family = ["Garrett", "Kristin", "Courtney", "Sean"];
const meal = ["Quinoa", "Kale", "Sweet potatoes", "Shrimp", "Grits"];

for (let index = 0; index < family.length; index++) {
    for (food of meal) {
        console.log(`You put ${food} on ${family[index]}'s plate.`);
    }
}
```

This will produce the following output.

```
​​​​You put Quinoa on Garrett's plate​​​​​
​​​​​You put Kale on Garrett's plate​​​​​
​​​​​You put Sweet potatoes on Garrett's plate​​​​​
​​​​​You put Shrimp on Garrett's plate​​​​​
​​​​​You put Grits on Garrett's plate​​​​​
​​​​​You put Quinoa on Kristin's plate​​​​​
​​​​​You put Kale on Kristin's plate​​​​​
​​​​​You put Sweet potatoes on Kristin's plate​​​​​
​​​​​You put Shrimp on Kristin's plate​​​​​
​​​​​You put Grits on Kristin's plate​​​​​
​​​​​You put Quinoa on Courtney's plate​​​​​
​​​​​You put Kale on Courtney's plate​​​​​
​​​​​You put Sweet potatoes on Courtney's plate​​​​​
​​​​​You put Shrimp on Courtney's plate​​​​​
​​​​​You put Grits on Courtney's plate​​​​​
​​​​​You put Quinoa on Sean's plate​​​​​
​​​​​You put Kale on Sean's plate​​​​​
​​​​​You put Sweet potatoes on Sean's plate​​​​​
​​​​​You put Shrimp on Sean's plate​​​​​
​​​​​You put Grits on Sean's plate​​​​​
```

Your task in this exercise is to write code to ensure that every room gets clean in each of the buildings that are in charge of cleaning every day.