
// uncomment one of three to check the difference

const userEmail = "non@gmail.com";
// const userEmail = "";
// const userEmail = [];

if(userEmail){
    console.log("Got user Email.");
}
else{
    console.log("Don't have user Email.");
}

// Falsy Values :
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


// Truthy Value :
// "0" , 'false' , " " , [] , {} , function(){}
// false == 0 , false == '' , 0 == ''

if(userEmail.length === 0){
    console.log("Array is Empty.");  
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty.");
}