//  Note ==> This Object's Output is given at time Monday 02 Dec 2024 10:06:35

let myDate = new Date()
console.log(myDate);                        // 2024-12-02T04:36:35.947Z
// This Object gives you current Date

console.log(myDate.toString());             // Mon Dec 02 2024 10:06:35 GMT+0530 (India Standard Time)
// This Object gives you current Date in String Format

console.log(myDate.toDateString());         // Mon Dec 02 2024
// This Object gives you current Date in [DAY DD MM YYYY] format

console.log(myDate.toISOString());          // 2024-12-02T04:39:48.130Z
// This Object gives you current Date in [YYYY-MM-DD To HH-MM-SS.SSSZ] format

console.log(myDate.toJSON());               // 2024-12-02T04:39:48.130Z
// This Object gives you current Date in [YYYY-MM-DD To HH-MM-SS.SSSZ] format
// Both Upper Works same

console.log(myDate.toLocaleDateString());   // 2/12/2024
// This Object gives you current Date in [DD MM YYYY] format

console.log(myDate.toLocaleString());       // 2/12/2024, 10:09:48 am
// This Object gives you current Date in [DD MM YYYY, HH:MM:SS am/pm] format

console.log(typeof myDate);     // Object

let myInsertedDate = new Date(2025 , 0 , 23)                
console.log(myInsertedDate.toLocaleString());               // 23/1/2025, 12:00:00 am
// You can add Date in this Object in Date(YYYY,MM,DD) Format
// NOTE ==> in this format month start with 0 to 11


let myInsertedTime = new Date(2025 , 0 , 23 , 7 , 20 , 59)  
console.log(myInsertedTime.toLocaleString());               // 23/1/2025, 7:20:59 am
// You can add Date in this Object in Date(YYYY,MM,DD,HH,MM,SS) Format
// NOTE ==> in this format month start with 0 to 11

let myDateFormate1 = new Date("2025-01-25")  
console.log(myDateFormate1.toLocaleString());   // 25/1/2025, 5:30:00 am
// You can add Date in this Object in Date("YYYY-MM-DD") Format

let myDateFormate2 = new Date("01-14-2025")  
console.log(myDateFormate2.toLocaleString());   // 14/1/2025, 12:00:00 am
// You can add Date in this Object in Date("MM-DD-YYYY") Format

//   ================================================================
//   ||    This Function's MiliSecond Started at 1 January 1970    ||
//   ================================================================

let myTimeStamp = Date.now()
console.log(myTimeStamp);                   // 1733115644765
// This ".now" Function gives Date in MiliSecond  

console.log(myDateFormate2.getTime());      // 1736793000000
// with ".getTime" function you can find your Date in MiliSecond  

console.log(Math.floor(Date.now() / 1000)); // 1733115941
// By this you can find date in seconds
