Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Using-iteration-to-filter-a-collection

# Getting Only What You Need

Software developers deal with data structures like arrays and objects every day. It is most common to be dealing with a collection of objects, usually an array of objects (there are other kinds of mechanisms in JavaScript to create a collection).

Consider this data structure. It's an array of objects. Each object represents a month in 1948. Each object has two properties

1. The name of the month
2. The total rainfall in that month

```js
const year_1948 = [
    { month: "January", rainfall: 3.4 },
    { month: "February", rainfall: 3.8 },
    { month: "March", rainfall: 4.9 },
    { month: "April", rainfall: 6.1 },
    { month: "May", rainfall: 5.5 },
    { month: "June", rainfall: 3.9 },
    { month: "July", rainfall: 8.3 },
    { month: "August", rainfall: 7.1 },
    { month: "September", rainfall: 5.0 },
    { month: "October", rainfall: 4.5 },
    { month: "November", rainfall: 4.7 },
    { month: "December", rainfall: 3.1 }
]
```

You've been hired by a researcher that works for the FDA to produce a report that shows anomalous rainfall data. The researcher states that she wants to see only months where the rainfall was below 3.5 inches, or greater that 8 inches for each year. You would solve that with iteration, and some conditions inside the loop to populate a new array with the anomalous months.

```js
// The original data
const year1948 = [
    { month: "January", rainfall: 3.4 },
    { month: "February", rainfall: 3.8 },
    { month: "March", rainfall: 4.9 },
    { month: "April", rainfall: 6.1 },
    { month: "May", rainfall: 5.5 },
    { month: "June", rainfall: 3.9 },
    { month: "July", rainfall: 8.3 },
    { month: "August", rainfall: 7.1 },
    { month: "September", rainfall: 5.0 },
    { month: "October", rainfall: 4.5 },
    { month: "November", rainfall: 4.7 },
    { month: "December", rainfall: 3.1 }
]

// Start with an empty array into which the anomalous months will be placed
const anomalousMonths = []

// Use a for loop to look at every month
for (month of year_1948) {

    // If the conditions for the current month match the requirements...
    if (month.rainfall < 3.5 || month.rainfall > 8.0) {
        // Add the current month to the new array
        anomalousMonths.push(month)
    }
}
```

When this iteration was complete, the value of `anomalousMonths` would be an array with 3 items in it. You have now filtered the original, raw data to provide valuable information to your customer.

```js
console.log(anomalousMonths)

> [ { month: 'January', rainfall: 3.4 },​​​​​
​​​​​  { month: 'July', rainfall: 8.3 },​​​​​
​​​​​  { month: 'December', rainfall: 3.1 } ]
```