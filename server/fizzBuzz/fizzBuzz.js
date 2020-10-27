
function playFizzBuzz(limit, Fizz, Buzz) {
    let res = []
    for (let i = 1; i <= limit; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            res.push(Fizz + Buzz)
        } else if(i % 3 === 0) {
            res.push(Fizz)
        } else if (i % 5 === 0) {
            res.push(Buzz)
        } else {
            res.push(i)
        }
    }
    return res.join(" ")
}

export {playFizzBuzz}
