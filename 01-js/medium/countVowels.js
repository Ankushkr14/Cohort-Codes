/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count =0;

    const lowercaseStr= str.toLowerCase();

    const vowels = new Set(['a','e','i','o','u']);
    //Set for Vowels: Instead of checking each character against individual characters ('a', 'e', 'i', 'o', 'u'), we use a Set named vowels to store these characters. This allows for faster lookup time (O(1) on average) compared to array or string inclusion checks

    for(let i=0;i<str.length;i++){
      if(vowels.has(lowercaseStr[i]))
        count++;
    }

    return count;
}

module.exports = countVowels;