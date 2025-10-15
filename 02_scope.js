let a=20;
const b=10;
var c= 30;

if(true){
    let a=2;
    const b=3;
    var c=300;
}

// console.log(a);
// console.log(b);
// console.log(c);
// function test() {
//   var x = 10;
//   console.log(x); // works
// }
// console.log(x); // ❌ error





function one(){
    const username ="Ravishyam"

    function two(){
        const website="youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two()
}
one()


if(true){
    const username ="ravishyamsingh"
    if(username==="ravishyamsingh"){
        const website="youtube"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);




 //++++++++++++++++++++instresting++++++++++++++++++++++++

//addOne(5) => we can do like that because here we didn't assign the value in any variable

 function addOne(num){
    return num+1
 }
 console.log(addOne(5));

//add(4) => We can't do because we assign value inside the variable 
 const add=function(num){
    return num+2
 }
 console.log(add(4));