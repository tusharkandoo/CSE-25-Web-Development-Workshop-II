/* In javascript we can have arrays, having multiple values of different datatypes in a single variable. */

console.log("\nArrays in JavaScript:");
let arr = [1 , "Hello" , true , {name : "John" ,} , [1 , 2 , 3]]; // This is an array having different datatypes as its elements.

console.log(arr); // This will print the entire array.
console.log(`\narr[0]: ${arr[0]}`); // This will print the first element of the array which is 1.
console.log(`arr[1]: ${arr[1]}`); // This will print the second element of the array which is "Hello".
console.log(`arr[2]: ${arr[2]}`); // This will print the third element of the array which is true.
console.log(`arr[3]: ${arr[3]}`); // This will print the fourth element of the array which is an object.
console.log(`arr[4]: ${arr[4]}`); // This will print the fifth element of the array which is another array.

// Types of each:
console.log("\nTypes of each element in the array:")
console.table({
    "arr[0]": typeof arr[0], // number
    "arr[1]": typeof arr[1], // string
    "arr[2]": typeof arr[2], // boolean
    "arr[3]": typeof arr[3], // object
    "arr[4]": typeof arr[4], // object (arrays are of type object in JavaScript)
})