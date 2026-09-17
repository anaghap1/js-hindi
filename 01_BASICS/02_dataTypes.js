"use strict";

// alert(3 + 3) // we are using nodejs , not bruwser so alert will not work here. It is used in browser to show pop up message.

console.log(3 + 3);
console.log("ANgha");  // This will print the result of 3 + 3 to the console, which is 6.

let name = "Sameer";
let age = 22;
let isLoggedIn = false;
let state = null;


console.log(name);
console.log(age);
console.log(isLoggedIn);
console.log(state);

//number => 2 to the power of 53
//bigint => 2 to the power of 53
// string= > ""
//boolean => true or false
//null => standalone value
//undefined => variable is declared but not assigned any value
//symbol => unique and immutable data type
//object => collection of properties

console.log(typeof "Sameer");
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null); // this is a bug in js, it should return null but it returns object
console.log(typeof undefined); // this will return "undefined" which is the correct behavior