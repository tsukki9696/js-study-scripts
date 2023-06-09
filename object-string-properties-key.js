// Write a function which checks and prints only the string type properties of an object
// our test object
const technology = {
  name: 'JavaScript',
  version: 6,
  purpose: 'Scripting language for Web',
  developer: 'Netscape Corporation'
}

function returnStringProperties(obj) {
  // Convert obj to a key/value array
  // [['name', 'JavaScript'], ['version', '6'], ...]
  const asArray = Object.entries(obj);
  const filtered = asArray.filter(([key, value]) => typeof value === 'string'); // Filters out everything that is not a string
  // Convert the key/value array back to an object:
  // {name: 'JavaScript', purpose: 'Scripting language for the Web', ...}
  const justStrings = Object.fromEntries(filtered);
  return justStrings;
}

console.log(returnStringProperties(technology));
