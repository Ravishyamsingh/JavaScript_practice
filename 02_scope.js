// ------------------------------
// Variable declarations and scope
// ------------------------------

let a = 20;      // Block-scoped variable
const b = 10;    // Block-scoped constant
var c = 30;      // Function/global-scoped variable

if (true) {
    let a = 2;      // New block-scoped 'a' (shadows outer 'a')
    const b = 3;    // New block-scoped 'b' (shadows outer 'b')
    var c = 300;    // Reassigns the SAME 'c' (var ignores block scope)
}

// console.log(a); // 20 → outer 'a' remains unchanged
// console.log(b); // 10 → outer 'b' remains unchanged
// console.log(c); // 300 → changed because 'var' is not block-scoped


// ------------------------------
// Function scope example
// ------------------------------

// function test() {
//     var x = 10;          // Function-scoped variable
//     console.log(x);      // Works
// }
// console.log(x);          // ❌ Error: x is not defined


// ------------------------------
// Lexical scope (nested functions)
// ------------------------------

function one() {
    const username = "Ravishyam"; // Accessible inside this function

    function two() {
        const website = "youtube"; // Inner function scope
        // console.log(username);   // ✅ Can access outer scope
    }

    // console.log(website); // ❌ Not accessible outside 'two'
    two();
}

one();


// ------------------------------
// Block scope with if statements
// ------------------------------

if (true) {
    const username = "ravishyamsingh";

    if (username === "ravishyamsingh") {
        const website = "youtube";
        // console.log(username + website); // Accessible here
    }

    // console.log(website); // ❌ Block-scoped
}

// console.log(username); // ❌ Block-scoped


// ------------------------------
// Hoisting behavior (important)
// ------------------------------

// Function declaration is hoisted
function addOne(num) {
    return num + 1;
}

console.log(addOne(5)); // Works → 6


// Function expression is NOT hoisted
// add(4); // ❌ Cannot access before initialization

const add = function (num) {
    return num + 2;
};

console.log(add(4)); // Works → 6
