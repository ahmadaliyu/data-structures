//MULTIPLE POINTER PATTERN

/* write a fxn that accept a sorted array and count the unique values in the array

Example:
[1,1,1,2,3,4,4,5] // 5
[-1, 1, 2, 2] // 3
  i  j

             i        j
[1, 2, 3, 4, 5, 4, 4, 5] 

*/
// multiple pointer pattern

const countUniqueValues = (arr) => {
  // create 2 pointers i, j
  // if value of right pointer is equal to value of left pointer, shift right pointer one step
  /* if value of right pointer is not equal to value of left pointer, 
    shift left pointer one step and make left pointer to be right pointer */
  //if right pointer equal last index of the array, return index of left pointer plus 1

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    if (arr[j] == arr.length - 1) {
      return i + 1;
    }
  }
};

console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 6, 7, 8, 9]));
