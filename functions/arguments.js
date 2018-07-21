// multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// default arguments
let getScoreText = function (name = 'anonymous', score = 0) {
    console.log(name)
    console.log(score)
    return ('Name: ' + name + ' - Score: ' + score)
}

getScoreText()
getScoreText('test',100)

let scoreText = getScoreText()
console.log(scoreText)

scoreText = getScoreText()
console.log(scoreText)

// exercise
// total, tipPercent (.2 as the default), calculate the tip amount
let tipCalculator = function (total = 0, tipPercent = .2) {
    // return total * tipPercent
    return `A ${tipPercent * 100}% tip on $${total} would be ${total * tipPercent}`
}

let tip = tipCalculator()
console.log( tip)

tip = tipCalculator(100)
console.log( tip)

tip = tipCalculator(null, .3)
console.log( tip)

tip = tipCalculator(100, .3)
console.log( tip)

let name = 'Christos'

console.log(`My name is ${name}`)