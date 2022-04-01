//e.g "hello" ===> "olleh", 12345 ===> 54321

const reverse = (val) => {
    if(val.length <= 1) return val
    return reverse(val.slice(1)) + val[0]
}

console.log(reverse("hello"))