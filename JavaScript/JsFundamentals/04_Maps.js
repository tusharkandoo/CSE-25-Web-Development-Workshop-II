/* Map in js are used to perform a function on a given array 
   Syntax: originalArray.map((currentValue, index, arr) => {
    // return element for newArray, after executing some operations on currentValue
})
   */

let initialArr = [1 , 2 , 3 , 4]
let squaredArr = initialArr.map((index) => { return index * index})

console.log("Intial Array is: " , initialArr)
console.log("Squared Array is: " , squaredArr)

// Example

let sum = [1, 2, 3, 4]
let total = sum.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue, 2)
})

/* Explanation: 
   1. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   2. The reducer function takes four arguments:
      - Accumulator (acc): It accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
      - Current Value (cur): The current element being processed in the array.
      - Current Index (idx): The index of the current element being processed in the array. Starts from index 0, if an initialValue is provided, and from index 1 otherwise.
      - Source Array (src): The array reduce() was called upon.
   3. The reduce() method executes the reducer function on each element of the array, resulting in a single output value.
*/

console.log("Sum of the array is: " , total)

let name = students.m