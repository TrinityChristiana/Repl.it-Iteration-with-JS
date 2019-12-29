const family = [
    { name: "Garrett", age: 7 },
    { name: "Kristin", age: 32 },
    { name: "Courtney", age: 12 },
    { name: "Sean", age: 37 }
];
const meal = ["Quinoa", "Kale", "Sweet potatoes", "Shrimp", "Grits"];

for (var each of family) {
    for (var food of meal) {
        console.log(`You put ${food} on ${each.name}'s plate'.`);
    }
    
    // This should only happen if the person is at least 21 years old
    if (each.age >= 21) {
    	console.log(`You pour wine for ${each.name}.`);
    }
}