// It is Basic Comparisions 
console.log(2 > 1);     // true
console.log(2 >= 1);    // true
console.log(2 < 1);     //false
console.log(2 == 1);    //false
console.log(2 != 1);    // true

// It compares string to number but not usable
console.log("2" > 1);   // true
console.log("02" > 1);  // true

// It compares NULL to number but NULL contaimes different values ate different time, so it is recomended to use
console.log(null > 0);  // true
console.log(null >= 0); //false
console.log(null == 0); // true

// It compares UNDEFINED to number 
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0);//false

// It Compares values ans it's datatype Strictly
console.log("2" === 2); //false
