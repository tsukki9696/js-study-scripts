// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number'

function isDivisible(input) {
  let result = '';

  if (typeof input !== Number) {
    result = 'not a number'
  }
  // With input % 3 === 0 we can know if the number is divisible by 3 (or 5)
  if (input % 3 === 0 && input % 5 === 0) {
    result = 'FizzBuzz'
  } else if (input % 3 === 0) {
    result = 'Fizz'
  } else if (input % 5 === 0) {
    result = 'Buzz'
  } else if (input % 3 !== 0 || input % 5 !== 0) {
    result = input
  }
  return result
}

console.log(isDivisible(15)); // FizzBuzz
console.log(isDivisible(12)); // Fizz
console.log(isDivisible(10)); // Buzz
console.log(isDivisible(11)); // None
console.log(isDivisible('balls')); // NaN
