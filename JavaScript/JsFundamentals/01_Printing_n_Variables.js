// Assigning a Variable - using let
// 'Var' is old and not supported now - some old unsafe methods are being removed from 'let' keyword

// Unsafe Methods :
// 1. Redeclaration - works with Var but let doesn't allow it
var nm = "Vedant"
console.log("Name : " + nm)

var nm = "Rohit"
console.log("Updated Name : " + nm)


let nm1 = "Vedant"
console.log("Name : " + nm)

// let nm1 = "Rohit" // Gives an error of Redeclaration
nm1 = "Rohit" // This will work
console.log("Updated Name : " + nm) 

// 2. Accessing a variable outside {} blocks

if(true) {
    var age = 19
}

if(true) {
    let age = 19
}

// console.log("Age : " + age) // This will show an output but it is not safe to access it outside
console.log("Age : " + age) // Shows error as let doesn't allow it


// *** String Concatenation *** 
// Old method - using '+'
let greeting = "Hello" + nm1 + "! How are you?"

// New way - template literal (format type string)
// Note: Use backtick ' ` ' to enclose string while using f"type string
let greeting1 = `Hello ${nm1}! How are you?`

console.log(greeting1)