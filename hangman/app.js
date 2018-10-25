
const hangman1 = new Hangman ('Car Parts', 2)
const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = hangman1.puzzle
const guessesEl = document.querySelector('#guesses')
guessesEl.textContent = hangman1.statusMsg

console.log(hangman1.status)

window.addEventListener('keypress', (e) => {
    
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    puzzleEl.textContent = hangman1.puzzle
    guessesEl.textContent = hangman1.statusMsg
})

getPuzzle(2,(error, puzzle)=>{
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// sync call (not recommended, actually deprecated)
// const puzzle = getPuzzleSync() 

// Making an Http request
// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occured')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()


// //
// const myCountryCode = 'CY'
// const request2 = new XMLHttpRequest()

// request2.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText)
//         const myCountry = countries.find((country) => country.alpha2Code === myCountryCode)
//         if (myCountry !== undefined) {
//             console.log(myCountry.name)
//         } else {
//             console.log('Country not found')
//         }
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occured')
//     }
// })

// request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// request2.send()

getCountryInfo('CY',(error, country)=>{
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country.name)
    }
})
