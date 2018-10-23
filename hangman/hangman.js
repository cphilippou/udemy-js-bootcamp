'use strict'

class Hangman {
    constructor (word, guesses) {
        this.word = word.toLowerCase().split("")
        this.guessedLetters = []
        this.guesses = guesses
        this.status = 'playing'
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
    
        if (hangman1.status !== 'playing') {
            return
        }
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
            if (!this.word.includes(guess)) {
                this.guesses--
            }
        }
        this.calcStatus()
    }

    getPuzzle() {
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



    calcStatus() {
        if (this.guesses === 0) {
            this.status = 'failed'
        } else {
            // let allFound = true
            // this.word.forEach( (letter) => {
            //     allFound = allFound && this.guessedLetters.includes(letter)
            // })
            const allFound = this.word.every((letter) => this.guessedLetters.includes(letter))
            if (allFound) {
                this.status = 'finished'
            } else {
                this.status = 'playing'
            }
    
        }
    }

    getStatus() {
        if (this.status === 'playing') {
            return `Playing -> Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `Failed -> Nice try!  The original word was:"${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return 'Finished -> Great work, you guessed the word'
        } else {
            return 'Unknown status'
        }
    }

}

// without the use of the cless contructor
// const Hangman = function(word, guesses) {
//     let tmpString = word.toLowerCase()

//     this.word = word.toLowerCase().split("")
//     this.guessedLetters = []
//     this.guesses = guesses
//     this.status = 'playing'
// }

// Hangman.prototype.getPuzzle = function () {
//     let guessed = []
//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter ===' ') {
//             guessed.push(letter)
//         } else {
//             guessed.push('*')
//         }      
//     })  
//     return guessed.join('')
// }

// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase()

//     if (hangman1.status !== 'playing') {
//         return
//     }
//     if (!this.guessedLetters.includes(guess)) {
//         this.guessedLetters.push(guess)
//         if (!this.word.includes(guess)) {
//             this.guesses--
//         }
//     }
//     this.calcStatus()
// }

// Hangman.prototype.calcStatus = function () {
//     if (this.guesses === 0) {
//         this.status = 'failed'
//     } else {
//         // let allFound = true
//         // this.word.forEach( (letter) => {
//         //     allFound = allFound && this.guessedLetters.includes(letter)
//         // })
//         const allFound = this.word.every((letter) => this.guessedLetters.includes(letter))
//         if (allFound) {
//             this.status = 'finished'
//         } else {
//             this.status = 'playing'
//         }

//     }
// }

// Hangman.prototype.getStatus = function () {
//     if (this.status === 'playing') {
//         return `Playing -> Guesses left: ${this.guesses}`
//     } else if (this.status === 'failed') {
//         return `Failed -> Nice try!  The original word was:"${this.word.join('')}"`
//     } else if (this.status === 'finished') {
//         return 'Finished -> Great work, you guessed the word'
//     } else {
//         return 'Unknown status'
//     }
// }
