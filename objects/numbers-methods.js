let num = 103.941

/*
console.log(num.toFixed(8))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random())
*/

let min = 1
let max = 5

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min


//exercise
let makeGuess = function (guess) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    return guess === randomNum
}

console.log(makeGuess(1))

