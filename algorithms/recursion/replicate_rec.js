/* The function should return an array containing repetitions of the number argument. 
For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative,
 return an empty array */

 const replicate = (times, num) =>{
    if(times <= 0) {
        return []
    }
    return [num].concat(replicate(times - 1, num))
 }

 console.log(replicate(3, 4))