                    // ===========  NUMS ============  // 

const score = 400
console.log(score);

const balance = new Number(100)     // It specifies the value has Number Datatype
console.log(balance);               // [Number: 100]

console.log(balance.toString());    // 100
// It converts number to String datatype

console.log(balance.toFixed(2));    // 100.00
// It Fix the value only 2 number are allowed after point

const extraBalance = 154.511516
console.log(extraBalance.toPrecision(3));   // 155
// It returns the value in Round Figure as the parameter passed
// NOTE ===> You want to make sure the parameter value is not lower than the characters before point

const money = 1000000
console.log(money.toLocaleString());        // 10,00,000
console.log(money.toLocaleString('en-US')); // 1,000,000 


                    // ===========  MATHS ============  // 

console.log(Math);              // Object[Math] {}

console.log(Math.abs(-3451));   // 3451
// It converts Negative value to positive

console.log(Math.round(4.5));   // 5
// It round up value and give you nearest integer value

console.log(Math.ceil(5.02));   // 6
// It give you Ceiling value means next integer value

console.log(Math.floor(8.6));   // 8
// It give you Floor value means previous integer value

console.log(Math.min(3,6,5,4)); // 3
// It give you Minimun value from given

console.log(Math.max(3,6,5,4)); // 6
// It give you Maximum value from given

console.log(Math.random());
// It Generates random number

console.log(Math.random() * 10);
// It Generates random number between 0 to 10

console.log((Math.random() * 10) + 1);
// It Generates random number between 1 to 10

console.log(Math.floor(Math.random() * 10) + 1);
// It Generates random number between 1 to 10 and it is integer value

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min );
// It Generates random number between 1 to 6 and it is integer value