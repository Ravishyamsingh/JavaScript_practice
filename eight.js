/*
=========================================
 Program: Array reduce() Example
 Description:
 - Demonstrates how reduce() works
 - Calculates sum of numbers
 - Calculates total price from shopping cart
=========================================
*/

// ---------- Example 1: Sum of numbers ----------

// Input array
const myNums = [1, 2, 3];

/*
 reduce() explanation:
 - acc  → accumulator (stores running result)
 - curr → current value from array
 - 0    → initial value of accumulator
*/
const myTotal = myNums.reduce((acc, curr) => {
    // acc starts from 0
    // curr takes values: 1, 2, 3
    return acc + curr;
}, 0);

// Output result
console.log("Sum of numbers:", myTotal);


// ---------- Example 2: Shopping cart total ----------

// Shopping cart array (objects)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

/*
 reduce() to calculate total price:
 - acc starts from 0
 - item represents each object in array
 - item.price is added to accumulator
*/
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

// Final output
console.log("Total price to pay:", priceToPay);
