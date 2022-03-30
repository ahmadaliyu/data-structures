const power = (num, base) => {
    if(base === 0) {
        return 1
    }
    return num * power(num, base - 1)                                 
}

console.log(power(2, 3))