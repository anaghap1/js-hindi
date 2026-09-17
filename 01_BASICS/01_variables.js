const accountId = 12334;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "New York";

//accountId = 98765; // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "sameer@gmail.com";
accountPassword = "54321";
accountCity = "Los Angeles";
 // This will work because accountCity is a global variable and can be reassigned.
 let accountState;
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/*
prefer not to use var because it is function scoped and can lead to unexpected behavior. Use let and const instead for block scoping and better code readability.
*/
