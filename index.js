function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

function isPalindrome(word) {
  // Reverse the word
  const PalindromeWord = word.split("").reverse().join("");

  // Check if the original word is the same as the reversed word
  return word === PalindromeWord;
} 


if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
