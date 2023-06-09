// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit

function calcSumOfMultiples(curLimit) {
  let sumOfMultipleValue = 0;

  for (let i = 0; i <= curLimit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumOfMultipleValue += i;
    }
  }
  return `sumOfMultipleValue of 3 & 5 upto ${curLimit} digit is: ${sumOfMultipleValue}.`
}

console.log(calcSumOfMultiples(10));
