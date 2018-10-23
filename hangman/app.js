
const hangman1 = new Hangman ('Car Parts', 2)
const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = hangman1.puzzle
const guessesEl = document.querySelector('#guesses')
guessesEl.textContent = hangman1.statusMsg

console.log(hangman1.status)

window.addEventListener('keypress', function(e){
    
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    puzzleEl.textContent = hangman1.puzzle
    guessesEl.textContent = hangman1.statusMsg
})