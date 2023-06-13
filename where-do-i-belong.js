// Hint 1
// The first thing to do is sort the array from lower to bigger,
// just to make the code easier. This is where sort comes in,
// it needs a callback function so you have to create it.

// Hint 2
// Once the array is sorted, then just check for the
// first number that is bigger and return the index.

// Hint 3
// If there is no index for that number then you will
// have to deal with that case too.

function getIndexToIns(arr, num) {
  // Sort array
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length
}

console.log(getIndexToIns([3, 1, 6], 2))
console.log(getIndexToIns([40, 60], 50));
