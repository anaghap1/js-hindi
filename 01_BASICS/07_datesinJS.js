//dates

let myDate = new Date();
// console.log(myDate.toDateString()); //Mon Jun 10 2024
// console.log(myDate.toTimeString()); //12:34:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); //6/10/2024, 12:34:56 PM
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,5,23,5,3)
let myCreatedDate = new Date("01-04-1998")

// console.log(myCreatedDate.toLocaleString()); //6/23/2023, 5:03:00 AM

let myTimeStamp = Date.now(); //timestamp in milliseconds
console.log(myTimeStamp); //1686395696000
console.log(myCreatedDate.getTime()); //888307800000
console.log(myCreatedDate.getFullYear()); //1998
console.log(myCreatedDate.getMonth()); //0-11 (0=January, 1=February, 2=March, 3=April, 4=May, 5=June, 6=July, 7=August, 8=September, 9=October, 10=November, 11=December)
console.log(myCreatedDate.getDate()); //1-31
console.log(myCreatedDate.getDay()); //0-6 (0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday)
console.log(myCreatedDate.getHours()); //0-23
console.log(myCreatedDate.getMinutes()); //0-59
console.log(myCreatedDate.getSeconds()); //0-59
console.log(myCreatedDate.getMilliseconds()); //0-999

console.log(Math.floor(Date.now()/1000)); //timestamp in seconds