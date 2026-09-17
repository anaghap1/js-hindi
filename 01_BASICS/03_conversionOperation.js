let score = null;
console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 
console.log(typeof booleanIsLoggedIn); 

// 1 => true
// 0 => false
// "Hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
