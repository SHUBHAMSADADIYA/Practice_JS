// 1. Singleton
// Object.create
// Creating object Threw the constructer


// 2. Object Literals

const mySym = Symbol("mySym1")

const JsUser = {
    name : "Shubham",
    "Full name": "Sadadiya Shubham",
    age : 19,
    location : "Gujarat",
    email : "shubham06@gmail.com",
    isLoggedIn : false,
    latLoggedinDays : ["Monday", "Saturday"],
    [mySym]:"mySym1"
    //=> mySym:"mySym1"
}

console.log(JsUser.email);
// It Prints Email directly from JsUser, But this method is not for Professional use

console.log(JsUser["email"]);
// It Prints Email directly from JsUser, But this method is for Professional use

console.log(JsUser["Full name"]);

console.log(JsUser[mySym]);
// This is the right way to call the Symbol
// This Question is also for Interview

//=> console.log(JsUser.mySym);   // datatype = String
// This is not a right way to call the symbol

JsUser.email = "sadadiyashubham@google.com"
// console.log(JsUser.email);
// You can change your data like given email

// Object.freeze(JsUser) 
// This Function freeze the all activities after calling freeze function

JsUser.email = "sadadiyashubham@yahoo.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Users.");    
}

JsUser.greeting2 = function(){
    console.log(`Hello Users , ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
