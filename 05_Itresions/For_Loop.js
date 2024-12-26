
// for
for (let i = 1; i <= 5; i++) {
    const element = i;
    console.log(element);

}


// Nested for
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {

        console.log(j);
    }
    console.log(" ");
}


// Print Table of 5
for (let i = 5; i < 6; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(" ");
}


// for loop from Array
myArray = ["Shubham", "Bhargav", "Prince", "Rohit", "Mihir"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


// Break
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is Detected and loop is Breaked.");
        break;
    }

    console.log(`Value of i is ${i}`);

}

// Continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is Detected But loop is Continued.");
        continue;
    }

    console.log(`Value of i is ${i}`);

}
