// Write a function which show or print Prime Number upto provided range
// Prime Numbers are those numbers whose factors are only `1` and `the number itself
// In simple language Prime Numbers are divisible by only `1` and `the number itself/himself
// Prime Numbers have only two factors: `1` and `the number itself/himself
// Example: 2, 3, 5, 7, 11, 13, 17, 19 and so on...

function isPrimeNumber(num) { 
  // Initializes factor as 2 and will increment it as long as it's lower than num
  for (let factor = 2; factor < num; factor++) {
    // If num / factor results in zero (not prime) return false
    if (num % factor === 0) { 
      return false;
    }
  }
  // True means it's a prime number
  return true; 
}

function showPrimeNumbers(numberLimit) {
  // Initializes current number as 2
  // If current number is lower or equals the number limit, increment curNum 
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
    // Recall our prime checking function
    if (isPrimeNumber(curNum)) { 
      console.log(`Prime Number: ${curNum}.`);
    }
  }
}

console.log(showPrimeNumbers(20));
