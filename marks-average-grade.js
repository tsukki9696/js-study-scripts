// Write a function which calculates the sum of numbers provided in an array, average it and then shows a grade.

function average(arr) {
  // Setup
  let avg = 0;
  let sum = 0;

  // Get sum of array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  
  // Get average of sum
  avg = sum / arr.length;

  // Get grade
  if (avg < 70) {
    return `Your grade average is ${avg}% and your Grade is D`
  } else if (avg < 80) {
    return `Your grade average is ${avg}% and your Grade is C`
  } else if (avg < 90) {
    return `Your grade average is ${avg}% and your Grade is B`
  } else if (avg <= 100) {
    return `Your grade average is ${avg}% and your Grade is A`
  }
}

console.log(average([80, 100, 80, 100]));
