// Declaration of a function
function greet(name) {
    return (`\nHello, ${name}!`);
}

// Calling the function

console.log(greet("Vedant"))


// ======================= //


// Practice
// 1. Function to add
function add(a , b){
    console.log(`\nAddition of ${a} and ${b} is ${a+b}`)
}

add(5,9)

// 2. Function to Substract
function substraction(a , b){
    console.log(`\nDifference of ${a} and ${b} is ${a-b}`)
}

substraction(5,9)

// 3. Function to Multiply
function prod(a , b){
    console.log(`\nProduct of ${a} and ${b} is ${a*b}`)
}

prod(5,9)

// 4. Function to Divide
function quotient(a , b){
    console.log(`\nQuotient of ${a} and ${b} is ${a/b}`)
}

quotient(5,9)


// ====================== // 

/* Function declared as a variable 
   - Note: to use the keyword 'var' or else the function will not be abled to print due to scope error. */

let newGreet = function(name) {
    console.log(`\nHello, ${name}!`);
} 

newGreet("Vedant")


/* Declaring a function using arrows function syntax 
   Syntax: include
   declaration name = (parameters) => {...} */

let arrowGreet = (name) => {
    console.log(`\nHello, ${name}!`);
}

arrowGreet("Vedant")