// // const tinderUser = new Object()
// // You can also create object like this 

const tinderUser = {}
// You can also create object like this 

tinderUser.id = "001"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "shubham06@google.com",
    fullName: {
        userFullName: {
            firstName : "Shubham",
            lastName : "Sadadiya"
        }
    }
}

console.log(regularUser.email);     // shubham06@google.com
console.log(regularUser.fullName);  // { userFullName: { firstName: 'Shubham', lastName: 'Sadadiya' } }
console.log(regularUser.fullName.userFullName); // { firstName: 'Shubham', lastName: 'Sadadiya' }
console.log(regularUser.fullName.userFullName.firstName); // Shubham

// You can call nested Objects using "." 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1 , obj2 }
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// This output is not as we want , and this not right method to combine the objects

const obj4 = Object.assign( obj1 , obj2 )
// this Function combinesthe objects
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd'}

const obj5 = Object.assign({}, obj1 , obj2 )
console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// NOTE ==> obj4 and obj5 , both method is same but , obj5 uses "{}" this gives you guarantee

const obj6 = {...obj1,...obj2}
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// This is best and latest method to combine object's data
 
const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]
console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]
// It gives all keys in array form

console.log(Object.values(tinderUser));   // [ '001', 'John', false ]
// It gives all values in array form

console.log(Object.entries(tinderUser));   // [ [ 'id', '001' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]
// It gives all keys with it's values in array form

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true
console.log(tinderUser.hasOwnProperty('isLogged'));     // false
// It Checks the given property is exist in object or not

const course = {
    coursename : "JavaScipt",
    price : 999,
    courseInstructor : "Shubham"
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course
// You can also change name of your key  

console.log(courseInstructor);  // Shubham
console.log(instructor);        // Shubham

// ======>  APIs  <======
// In APIs there are keys also written as string 

// Types

// 1. Object type
// {
//     "name" : "Shubham",
//     "course" : "JS",
//     "price" : "Free"
// }

// 2. Array type or JSON
// [
//     {},    
//     {},    
//     {},    
// ]