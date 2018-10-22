'use strict'

const Hangman = function(word, guesses) {
    let tmpString = word.toLowerCase()

    this.word = word.toLowerCase().split("")
    this.guessedLetters = []
    this.guesses = guesses
}

Hangman.prototype.getPuzzle = function () {
    let guessed = []
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter ===' ') {
            guessed.push(letter)
        } else {
            guessed.push('*')
        }      
    })  
    return guessed.join('')
}

const hangman1 = new Hangman ('Cat', 3)
hangman1.guessedLetters = ['c','b','t']
const hangman2 = new Hangman ('New Jersey', 4)
hangman2.guessedLetters = ['n','j','t','e']

console.log(hangman1.getPuzzle())
console.log(hangman2.getPuzzle())