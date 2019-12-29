Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Using-iteration-to-create-a-new-collection

# Modifying Items in One Array to Make Another Array

Time to reminisce about your first exercise in this classroom and how you were shown some sample code for how a software developer might write code to represent the process of peeling potatoes for Thanksgiving dinner. You are going to write the code for the next step in the process of making mashed potatoes.

Many home cooks will first cut the potatoes into 5 smaller pieces in order to ease the process of mashing them. Right now, you've got a mashing pot filled with 20 peeled potatoes.

```js
const wholePotatoes = [
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato",
    "potato", "potato", "potato", "potato", "potato"
];
```

Your job will be to iterate over this array of potatoes, and fill another array with 5 "potato piece" strings for every potato. Therefore, when the process is complete, you should have an array with 100 "potato piece" items in it.

You can go do the exercise now if you like, and come back later to read the content below which provides more context for why you are being asked to do this exercise.

# Why Software Developers Do This

You are being shown this process, because it is a common task that software developers need to perform. The raw data that is stored in a database - which is specialized software to store tabular, related data, much like a spreadsheet - is never in a form that is easily consumed by a human being. You will need to take arrays of raw data, iterate them, and populate a new array with data that is easier to work with, or easier to consume by humans.

Here's an example.

This is some sample data you would start with. First is an array filled with objects representing people.

```js
[
  { id: 1, name: "Brian Doane" },
  { id: 2, name: "Paloma Vargas" },
  { id: 3, name: "Michael Bennett" },
  { id: 4, name: "Courtney Seward" },
  { id: 5, name: "Azim Sodikov" }
]
```

You would also have an array of pets.

```js
[
  { id: 1, name: "Gypsy", owner: 5 },
  { id: 2, name: "Dutch", owner: 2 },
  { id: 3, name: "Sugar", owner: 4 },
  { id: 4, name: "Ballyhoo", owner: 1 },
  { id: 5, name: "Prince", owner: 3 }
]
```

This raw information is useless to a normal person because they don't know how it all fits together, but you will know how to do it eventually. You would use your skills to make a new array containing the following strings.

```js
[
  "Gypsy is owned by Azim Sodikov",
  "Dutch is owned by Paloma Vargas",
  "Sugar is owned by Courtney Seward",
  "Ballyhoo is owned by Brian Doane",
  "Prince is owned by Michael Bennett"
]
```

Those are the strings you would make sure showed up in the browser for your customers to read.