const user ={
    username:"ravishyam",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="satish"
// user.welcomeMessage()

//console.log(this); output {} empty parentheses 
// 
 // Here(In vs code we are running code in node js so output will be empty parentheses {} but same things if we will run in the browser then we will get windows event because old time only one plateform we have to execute the code but now we have many plateform to execute(independent))



 function chai(){
    let username = "ravishyam"
    console.log(this.username);//undefined
    
 }
 chai()

 const chais=()=>{
    let username="ravi"
    console.log(this); //undefined
    
 }
chai()


// const addTwo =(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//const addTwo =(num1, num2) => num1+num2

// const addTwo =(num1, num2) => (num1+num2)

const addTwo =(num1, num2) => ({username:"ravijee"})

console.log(addTwo(3,5));

