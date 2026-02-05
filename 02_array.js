// Arrays of Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ------------------------------
// push(): adds dc_heros as a single element (nested array)
// ------------------------------

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);        // ["thor","Ironman","spiderman",[...]]
// console.log(marvel_heros[3][1]);  // "flash"


// ------------------------------
// concat(): merges two arrays and returns a new array
// ------------------------------

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


// ------------------------------
// spread operator (...): modern and preferred way to merge arrays
// ------------------------------

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


// ------------------------------
// flat(): flattens nested arrays
// ------------------------------

const another_array = [
    1, 
    2, 
    3, 
    [4, 5, 6], 
    7, 
    [6, 7, [4, 5]]
];

// Infinity flattens all nested levels
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1,2,3,4,5,6,7,6,7,4,5]


// ------------------------------
// Array utility methods
// ------------------------------

// Check if value is an array
console.log(Array.isArray("Ravi")); // false

// Convert iterable (string) into array
console.log(Array.from("Ravi"));    // ["R","a","v","i"]

// Object is not iterable → returns empty array
console.log(Array.from({ name: "ravi" })); // []


// ------------------------------
// Array.of(): creates array from individual values
// ------------------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creates an array from provided arguments
console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]
