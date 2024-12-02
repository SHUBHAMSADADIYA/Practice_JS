const acconutId = 111111
let accountEmail = 'nothing@gmail.com'
var accountPass = '1234'
accountCity = 'Thane'
let accountState;

// accountID = 222222 is not valid because it is Constant Variable
accountEmail = 'sadadiyashubham5@gmail.com'
accountPass = '124421'
accountCity = 'Ratanpar'

/*  I don't Prefer you to use var variable to define variables
    and also it gives issue in scope like'{ }'which is used with IF and FOR loop
    inspite of var you should use let variable
*/

// it is used to print single Variable
console.log(acconutId);

//it is used to print multiple Variables at time 
console.table([acconutId,accountEmail,accountPass,accountCity,accountState]) 
