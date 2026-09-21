const name ="Anagah"
const greeting = "Good Morning"
//  console.log(greeting+ name) //Good MorningAnagah

console.log(`Hello my name is ${name} and ${greeting}`) //Hello my name is Anagah and Good Morning
const gameName = new String("chess-mouse") //String object
console.log(typeof gameName) //object

console.log(gameName[3])
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))

const newString = gameName.substring(0,3)
console.log(newString) //che
const anotherString = gameName.slice(-8,4)
console.log(anotherString) //che

const myString = "   Hello World   "
console.log(myString)
console.log(myString.trim()) //Hello World

const url ="https://anagah.com/hitesh%20patel"
console.log(url.replace("%20", "-"))
console.log(url.includes("hitesh")) //true
console.log(url.startsWith("https")) //true
console.log(gameName.split("-")) //['chess', 'mouse']