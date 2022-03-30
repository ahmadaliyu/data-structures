const factorial = (num) =>{
    if(num == 1){
        console.log("complete")
        return 1
    }
    console.log(num)
    return num * factorial(num - 1)
}

console.log(factorial(5))