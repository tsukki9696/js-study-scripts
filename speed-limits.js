// If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
// If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point
// If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'

function speedLimit(input){
  let penalty = 0; // Initialize penalty as 0

  if (input <= 70) {
    return 'Good Safe Driving'
  } 

  if (input > 70) {
    penalty = Math.floor((input - 70) / 5); // Calculate penalty points
    if (penalty > 10) {
      return 'License Suspended'
    }
    return `Speed Limit Crossed by ${penalty} Penalty Point${penalty > 1 ? 's' : ''}`
  }
}

// Tests
console.log(speedLimit(70))
console.log(speedLimit(80))
console.log(speedLimit(90))
console.log(speedLimit(100))
console.log(speedLimit(110))
console.log(speedLimit(120))
console.log(speedLimit(130))
