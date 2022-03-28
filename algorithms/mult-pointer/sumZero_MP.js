//MULTIPLE POINTER PATTERN

/* Write a function that accept a sorted array which should find the first pair that sum to zero,
  return an array that includes both value 
  
  Example: 
  [-5,-3 -2, 1, 2, 6] // [-2, 2]
  
  */

  //Multiple pointer approach

  const sumZero = (sortedArray) =>{
      // create 2 pointers from left and right
      // left pointer must be less than right pointer
      // if sum is zero, return the array with the indices
      //if sum is less than 0, shift left pointer 1 step
      //if sum is greater than 0, shift right pointer 1 step

      let left = 0, right = sortedArray.length - 1
      while(left < right){
          let sum = sortedArray[left] + sortedArray[right]
          if(sum === 0) return [sortedArray[left], sortedArray[right]]
          if(sum < 0) left++
          else right--
      }
  }

  console.log(sumZero([-5, -3, -2, 1, 3, 9]))