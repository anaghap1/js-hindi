const marvelHeros = ["thor", "Ironaman", "spiderman", "hulk", "captain america"];
const dcHeros = ["batman", "superman", "flash", "wonder woman", "aquaman"];
 

marvelHeros.push(...dcHeros); // Adding Batman from dcHeros to marvelHeros
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros); // Concatenating dcHeros to marvelHeros
// console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros]; // Using spread operator to combine both arrays
// console.log(allHeros);

const another_array = [1,2,3,[4,5,6],7,[[4,5],8,9,10],15,16];
const real_another_array = another_array.flat(2)
console.log(real_another_array); // Flattening the nested array to a single level

console.log(Array.isArray("Anagha")); // Checking if the given value is an array or not
console.log(Array.from("Anagha")); // Converting a string to an array
console.log(Array.isArray([1,2,3])); 
console.log(Array.from({name: "Anagha"})); //interesting 

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3)); // Creating an array from the given values
