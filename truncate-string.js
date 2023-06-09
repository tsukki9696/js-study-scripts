// Truncate a string (first argument) if it's longer than
// the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// the no bullshit answer
function truncateString(str, num) {
  // use subtring, then append a '...'
  let truncatedStr = str.substr(0, num);
  let truncateAppend = '...';
  return truncatedStr.concat(truncateAppend);
}

// the bullshit answer freecodecamp wants me to submit
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // should return the string A-tisket...
