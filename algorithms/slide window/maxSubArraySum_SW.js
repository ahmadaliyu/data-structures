//SLIDING WINDOW PATTERN

/*Write a function which accepts an array and a number called n. 
The fxn should calculate the maximum sum of n consecutive elemnts in the array
*/

/* Given
   maxSubArraySum([1, 3, 5, 2, 4, 8, 2, 6], 3)

   returns 16 ---->> 8 + 2 + 6
*/
const maxSubArraySum = (arr, num) =>{
    let maxSum = 0
    let tempSum = 0

    if(arr.length < num) return null
    for(let i = 0; i < num; i++){
        maxSum += arr[i] 
    }
    tempSum = maxSum // 1 + 3 + 5 = 9 
    //start the loop at 2 now,  add 2 and subtract 1 ---> 9 + 2 - 1
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubArraySum([1, 9, 6, 2, 4, 8, 2, 6], 3))
