// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also
// capitalize connecting words like the and of.

function titleCase(str) {
  return str
    .toLowerCase() // sets everything in lowcaps
    .split(' ') // splits le shite
    .map(function(word) {
      // ↓ first capital letter // ↓ the whole remain wword except first letter
        return word[0].toUpperCase() + word.substr(1); 
    })
    .join(' '); // joins le shite back again
}

console.log(titleCase("I'm a little tea pot")) //should return a string.
console.log(titleCase("I'm a little tea pot")) //should return the string I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt")) //should return the string Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //should return the string Here Is My Handle Here Is My Spout.
