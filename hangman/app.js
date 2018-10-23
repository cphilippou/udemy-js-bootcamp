
const hangman1 = new Hangman ('Cat', 2)
const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = hangman1.getPuzzle()
const guessesEl = document.querySelector('#guesses')
guessesEl.textContent = hangman1.getStatus()

console.log(hangman1.status)

window.addEventListener('keypress', function(e){
    if (hangman1.status = 'playing') {
        const guess = String.fromCharCode(e.charCode)
        hangman1.makeGuess(guess)
        puzzleEl.textContent = hangman1.getPuzzle()
        guessesEl.textContent = hangman1.getStatus()
        console.log(hangman1.status)
    }
})
