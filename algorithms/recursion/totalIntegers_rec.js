//Given a multi-dimensional integer array, return the total number of integers stored inside this array
//e.g totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

const totalIntegers = (multArray) =>{

    if(multArray.length === 0) return 0

    let total = 0
    let first = multArray.shift()
    if(Array.isArray(first)){
        total += totalIntegers(first)
    }else if(Number.isInteger(first)){
        total += 1
    }
    return total + totalIntegers(multArray)
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))

