// Create a function that looks through an array arr
// and returns the first element in it that passes a 'truth test'.
// Given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i]; // Num is set as each index in the array
    if (func(num)) {
      // Pre-defined function already checks each number for us,
      // So if it's true we return num
      return num 
    }
  }
  return undefined // If none return true, return undefined
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // should return 8.
console.log(findElement([2, 3, 5, 9], function(num) { return num % 2 === 0; })) // should return undefined.
