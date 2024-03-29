// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop
// You can access each member with array syntax arr[i].

// thanks lith
function largestOfFour(arr) {
  return arr.map(function(i) {
    return Math.max.apply(Math,i);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
