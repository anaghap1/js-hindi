let score = 400;
console.log(score);

const balance = new Number(100); //Number object
console.log(balance);
console.log(typeof balance); //object

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //100.0


const otherNumber = 1234.94566
console.log(otherNumber.toPrecision(4)); 

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN")); //10,00,00,000

//Math object
console.log(Math)
console.log(Math.PI);
console.log(Math.abs(-7.9)); //7.9
console.log(Math.round(7.9)); //8
console.log(Math.floor(7.9)); //7
console.log(Math.ceil(7.1)); //8
console.log(Math.sqrt(64)); //8
console.log(Math.pow(2, 4)); //16
console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200
console.log(Math.max(0, 150, 30, 20, -8, -200)); //150

//Random number between 0 and 1
console.log(Math.random()); //random number between 0 and 1
console.log(Math.floor(Math.random()*10) +1); //random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random number between 10 and 20
