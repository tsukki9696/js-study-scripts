function highAndLow(numbers) {
  let numberArray = numbers.split(' ').map(function(item) {
    return Number(item)   
  });

  let highestNum = Math.max(...numberArray);
  let lowestNum = Math.min(...numberArray);
  console.log(`${highestNum.toString()} ${lowestNum.toString()}`);
};

console.log(highAndLow('1 2 3')); // Should return 3, 1 (please do)
