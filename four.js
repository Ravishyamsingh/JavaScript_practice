// Object iteration using for...in
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// Array iteration (works, but not recommended for arrays in real code)
const programming = ["js", "rb", "py", "java", "cpp"];

for (const index in programming) {
    console.log(programming[index]);
}


// Correct way to iterate over Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const [key, value] of map) {
    console.log(key, value);
}
