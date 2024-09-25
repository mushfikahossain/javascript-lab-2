//Part 1: If-else Condition
console.log("Part 1: If-else Condition")

let negNumber = -4;
let posNumber = 7;
let zero = 0;

//positive
if (posNumber > 0) {
    console.log("7 is Positive!")
} else if (posNumber < 0) {
    console.log("7 is Negative!")
} else {
    console.log("7 is Zero!")
}

//negative
if (negNumber > 0) {
    console.log("-4 is Positive!")
} else if (negNumber < 0) {
    console.log("-4 is Negative!")
} else {
    console.log("-4 is Zero!")
}

//zero
if (zero > 0) {
    console.log("0 is Positive!")
} else if (zero < 0) {
    console.log("0 is Negative!")
} else {
    console.log("0 is Zero!")
}


//Part 2: Switch Statement
console.log("Part 2: Switch Statement")

var day = '5';

console.log("What is the 5th day of the week?")

switch (day) {
    case '1': 
        console.log("Monday")
        break;
    case '2': 
        console.log("Tuesday")
        break;
    case '3': 
        console.log("Wednesday")
        break;
    case '4': 
        console.log("Thursday")
        break;
    case '5': 
        console.log("Friday")
        break;
    case '6': 
        console.log("Saturday")
        break;
    case '7': 
        console.log("Sunday")
        break;
    default:
        console.log("Unknown Day")
}

//Part 3: Loops (For, While, Do While)
console.log("Part 3: Loops")

console.log("For Loop: 1-3")
for (let i = 1; i <= 3; i++) {
    console.log(i)
}

console.log("While Loops: 4-6")
let i = 4;
while(i >= 4 && i <= 6) {
    console.log(i)
    i++;
}

console.log("Do While Loops: 7-9")
let j = 7;
do {
    console.log(j)
    j++;
} while (j >= 7 && j <= 9)


//Part 4: Control Flow with break and continue
console.log("Part 4: Control Flow with break and continue")

console.log("Loop stops when reaching 3 (break)")
for (var n = 1; n <= 10; n++) {
    if (n === 4) {
       break;
    }
    console.log(n)
}

console.log("Loop skips 3 (continue)")
var numberArray = [1, 2, 3, 4, 5];
for (var m = 0; m < numberArray.length; m++) {
    if (numberArray[m] === 3) {
        console.log("Skipped")
        continue;
    }
    console.log(m+1)
}


//Part 5: Scope and Context
console.log("Part 5: Scope and Context")

let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";

    console.log("Accessing inside function: ")
    console.log(localVar)
    console.log(globalVar)
}

scopeExample();

console.log("Accessing outisde of function:")
console.log("localVar was inaccessible")
console.log(globalVar)

