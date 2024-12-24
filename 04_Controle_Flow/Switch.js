// Syntax
// switch(key){
//     case value:
//         break;
// 
//     default:
//         break;
// }

const month = "apr";
// const month = 1; // case 1:

switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;

    default:
        console.log("Enter month between 1-4.");
        break;
}