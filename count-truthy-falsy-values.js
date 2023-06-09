/*
<h3>Write a function which checks and count the truthy values from an array</h3>

Falsy values in JavaScript are:
<ul>
  <li>false</li>
  <li>0 (zero)</li>
  <li>undefined</li>
  <li>null</li>
  <li>''</li>
  <li>NaN</li>
</ul>
*/


function countFalsy(arr) {
  // !value in the filter method evaluates true for any falsy value
  let falsyValues = arr.filter(value => !value);
  let falsyCount = falsyValues.length;
  return falsyCount;
}

console.log(countFalsy([0, NaN, false, null]));
