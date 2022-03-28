//FREQUENCY COUNTER PATTERN

/* Given two strings, write a function to determine if the second string is an 
    anagram of the first

    Example:
    "", "" // true
    "hello", "llohe" // true
    "cat", "rar" // false
*/

const isAnagram = (str1, str2) => {
  //create two objects
  //if str1 and str2 length is not the same return false
  //loop str1 and str2 to count occurence of each letter
  //loop thru object1 and check if the key occured in object 2

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if (str1.length !== str2.length) {
    console.log("length did not match");
    return false;
  }

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log("is not anagram");
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  console.log("is anagram");
  return true;
};
console.log(isAnagram("carter", "teracr"));
