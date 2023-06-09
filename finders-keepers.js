// Create a function that looks through an array arr
// and returns the first element in it that passes a 'truth test'.
// Given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func = true) {
      return func
    } else {
      return undefined
    }
  }
  return num;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // should return 8.
console.log(findElement([2, 3, 5, 9], function(num) { return num % 2 === 0; })) // should return undefined.
