//FREQUENCY COUNTER PATTERN

//write a function that accepts two arrays and check if the elements of the 2nd array is the square of the elements of the first array

// Naive solution (O of n squared)
// const same = (arr1,arr2) =>{
//     //[2, 1, 3, 5], [1, 25, 4, 9]
//     //if their length is not the same return false
//     //loop thru arr1
//     //check if index of arr1 has an index in arr2 that is a square of arr1
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let currentIndex = arr2.indexOf(arr1[i] ** 2)
//         if(currentIndex == -1){
//             return false
//         }
//         console.log(arr2);
//         arr2.splice(currentIndex, 1)
//     }
//     return true
// }


//Frequency counter approach (O(n))
const same = (arr1,arr2) =>{
    // [1, 3, 5, 4] => [9, 16, 1, 25]

   //create two frequencyCounter object
   //if the length of the 2 arrays are not the same return false
    //loop thru arr1 and arr2 and set the count for occurence of keys in frqC1 and freqC2
    //loop thru frequencyCounter1  
    //if the square of key in frqC1 is not in frqC2 return false
    //if the two keys in frqC1 and frqC2 is not the same return false

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    if(arr1.length !== arr2.length){
        console.log("length did not match")
        return false
    }
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1  // if key in freqC1 is true or greater than 0 increment count else set count to 1  
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

}

console.log(same([1, 3, 2, 3, 5], [9,4, 1, 9,8]))