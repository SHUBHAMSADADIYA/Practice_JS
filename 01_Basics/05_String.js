const name = "Shubham"
const number = 28

// console.log(name + number + "th");
// do not use this method, this is irredable 

console.log(`Hello my Name is ${name} ane my Rollno is ${number}`);
// this is  Best method to Write a srting
// it uses sign (``) which is called BackQuote

// There are Differnet Methods in String

const gameName = new String("SADADIYA-SHUBHAM")
// console.log(gameName);
console.log(gameName[2]);       // D

console.log(gameName.length);   // 20  

console.log(gameName.__proto__);// {}    
// Prototype is Object 

console.log(gameName.toLowerCase());     
// sadadiya-shubham

console.log(gameName.charAt(2)); // D    
// Character at Index(3)

console.log(gameName.indexOf('Y')); // 6    
// Gives index of A

const newName = gameName.substring(0,8)   
console.log(newName);     // SADADIYA 
// Gives you String Between Start and End Point
// thats another mehtod is also can do same thing called "slice"

const anotherName = gameName.slice(9) // 9 is starting point  
console.log(anotherName); // SHUBHAM
// Gives you String Between Start and End Point

const stringOne = "    Shubham    "
console.log(stringOne);  // "    Shubham    " 
console.log(stringOne.trim());  // "Shubham" 

const url = "https://github.com/SHUBHAMSADADIYA/Practice_JS/tree/main/Basics"
console.log(url);

console.log(url.replace('/','-'));    
// https:-/github.com/SHUBHAMSADADIYA/Practice_JS/tree/main/Basics

console.log(url.replaceAll('/','-'));
// https:--github.com-SHUBHAMSADADIYA-Practice_JS-tree-main-Basics

console.log(url.includes('Shubham'));   // false
// it checks the given string is in the url or not

console.log(url.split('/'));
/* 
    [
        'https:',
        '',
        'github.com',
        'SHUBHAMSADADIYA',
        'Practice_JS',
        'tree',
        'main',
        'Basics'
    ]
*/
// It splits string into array where the given symbol is. 
