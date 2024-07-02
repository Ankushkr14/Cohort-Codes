/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function cleanString(str) {
    return str.toLowerCase().split('').sort().join('');
  }

  // Clean both strings
  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);

  // Check lengths of cleaned strings first
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Compare the cleaned and sorted strings
  return cleanedStr1 === cleanedStr2;
}

module.exports = isAnagram;
