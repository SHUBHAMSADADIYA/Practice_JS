// There are 2 types of Memory 

// ====> Stack(Primitive)
// In Stack When you want value it sands copy to variable

let myFirstName = "Shubham"

let myLastName = myFirstName

console.log(myLastName);        
// Here myLastName is myFirstName and myFirstName is "Shubham" 
// So myLastName is "Shubham" here

myLastName = "Sadadiya"

console.log(myLastName);
// Here I defined myLastName as "Sadadiya" 
// So myLastName is "Sadadiya" here


// ====> Heap(Non-Primitive)
// In Heap When you want value it gives Reference to varible

let user1 = {                    // making an Object
    email : "user1@gmail.com",
    age   : 20
}

let user2 = user1
// Here user2 = user1 therefor all properties of user1 can be used by user2

user2.email = "user2@gmail.com"
// Here We changed email of user2 
// But here we got reference of user1,
// So any change in user2 is automaticly changed in user2
// So we get ...

console.log(user1.email);   // user2@gmail.com
console.log(user2.email);   // user2@gmail.com
