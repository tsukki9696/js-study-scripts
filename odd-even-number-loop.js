// Write a function which checks number till given input/parameter is odd or even

function isOddOrEven(input) {
  if (input % 2 == 0) {
    return `${input} is Even.`
  } else if (input % 2 == 1) {
    return `${input} is Odd.`
  }
}

console.log(isOddOrEven(10));
console.log(isOddOrEven(3));
