// Primitive Data Types in JavaScript
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
 
const score = 100; //nmber
const scoreValue = 100.5; //number
const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined
const id = Symbol("123"); //symbol
const anotherId = Symbol("123"); //symbol
const bigNumber = 1234567890123456789012345678901234567890n; //bigint

console.log(typeof score); //number
console.log(id===anotherId); //false

// reference ( Non-Primitive ) Data Types in JavaScript
// 3 types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj=
{
    name: "Bruce Wayne",
    age: 30,
    isActive: true,
}
const myFunction = function(){
    console.log("Hello World");

}
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function
console.log(typeof null); //object

// https://262.ecma-international.org/5.1/#sec-11.4.3