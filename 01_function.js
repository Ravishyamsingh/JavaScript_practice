// ------------------------------
// Simple function without return (commented example)
// ------------------------------

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2); // Prints sum directly
// }

// Function call examples
// addTwoNum(3, 4)        // Output: 7
// addTwoNum(3, "4")      // Output: 34 (number + string → string concatenation)
// addTwoNum(3, "a")      // Output: 3a
// addTwoNum(3, null)     // Output: 3 (null treated as 0)

// const result = addTwoNum(3, 5) // Output printed, but result = undefined
// console.log("Result:", result) // undefined (no return value)


// ------------------------------
// Function with return value
// ------------------------------

function addTwoNum(num1, num2) {
    let result = num1 + num2; // Store the sum
    return result;            // Return the result
    // return num1 + num2;     // Alternate one-line return
}

const result = addTwoNum(3, 5);  // Function returns 8
console.log("Result:", result);  // Output: Result: 8


// ------------------------------
// Login function
// ------------------------------

function loggedIn(username) {

    // ❌ Logical issue: this condition is incorrect
    // if (!username === undefined) { ... }

    // Intended check should be:
    // if (username === undefined) { ... }

    if (!username === undefined) {
        console.log("Enter user name:");
        return;
    }

    // Return login message
    return `${username} just logged in`;
}

console.log(loggedIn("ravi")); // Output: ravi just logged in


// ------------------------------
// Function with rest parameters
// ------------------------------

// function calculateCardPrice(num1) {
//     return num1; // Only returns first value
// }

// console.log(calculateCardPrice(2))        // 2
// console.log(calculateCardPrice(2,4,5))    // Extra values ignored

function calculateCardPrice(...num1) {
    // Rest operator collects all arguments into an array
    return num1;
}

console.log(calculateCardPrice(2, 3, 3, 4, 5, 6, 7));
// Output: [2, 3, 3, 4, 5, 6, 7]


// ------------------------------
// Object as function parameter
// ------------------------------

const user = {
    username: "name",
    price: 199
};

function handleObject(anyobject) {
    // Access object properties using dot notation
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}

// Passing existing object
handleObject(user);

// Passing object directly
handleObject({
    username: "Ravi",
    price: 399
});


// ------------------------------
// Array as function parameter
// ------------------------------

const myNewArray = [200, 300, 400];

function returnSecondValue(getArray) {
    // Return second element (index 1)
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));            // 300
console.log(returnSecondValue([200, 300, 400, 500])); // 300






// function addTwoNum(num1,num2){
//     console.log(num1+num2);
    
// }
addTwoNum(3,4)     //=>7
// addTwoNum(3,"4")     =>34
// addTwoNum(3, "a")  =>3a
// addTwoNum(3, null) =>3
//const result=addTwoNum(3,5)  //8
//console.log("Result:",result); //undefine




function addTwoNum(num1,num2){
    let result=num1+num2;
    return result
    //return num1+num2
    
}
const result=addTwoNum(3,5)  //8
console.log("Result:",result); //undefine




function loggedIn (username){
    if(!username===undefined){
        console.log("Enter user name: ");
        return 
    }
    return `${username} just logged in`

}

console.log(loggedIn("ravi"))







// function calculateCardPrice(num1){
//     return num1

// }
// console.log(calculateCardPrice(2))
// console.log(calculateCardPrice(2,4,5)) // too  much value

function calculateCardPrice(...num1){
    return num1

}
console.log(calculateCardPrice(2,3,3,4,5,6,7))


const user = {
    username:"name",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);
handleObject({
    username:"Ravi",
    price:399
})


const myNewArray=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500]));


