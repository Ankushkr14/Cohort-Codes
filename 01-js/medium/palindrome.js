/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const normalisedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');

  for(let i=0;i<Math.floor(normalisedStr.length/2);i++){
    if(normalisedStr[i]!==normalisedStr[normalisedStr.length-1-i])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
