/*Write a function called productOfArray which takes in an array of numbers
 and returns the product of them all */

 const productOfArray = (arr) => {
     //base case
     //product of the array
     //e.g [1,2,3] gives 1 x 2 x 3 ---> 6
     if(arr.length === 0) return 1
     return arr.shift() * productOfArray(arr)
 }

 console.log(productOfArray([1,2,3]))

