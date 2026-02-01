// Basic for loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is a special number");
    }
    console.log(i);
}


// Nested loops (multiplication tables)
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// Looping through an array
const heroes = ["flash", "batman", "superman"];

for (let index = 0; index < heroes.length; index++) {
    console.log(heroes[index]);
}


// Using break
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Detected 5, stopping loop");
        break;
    }
    console.log(`Value of i is ${index}`);
}


// Using continue
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Detected 5, skipping this iteration");
        continue;
    }
    console.log(`Value of i is ${index}`);
}
