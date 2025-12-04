





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

