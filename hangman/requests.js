const getPuzzle = (wordCount, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has occured', undefined)
        }
    })
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

// sunc call
// const getPuzzleSync = () => {

//     const request = new XMLHttpRequest()
//     request.open('GET', 'http://puzzle.mead.io/puzzle', false)
//     request.send()

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('An error has occured')
//     }
// }

const getCountryInfo = (countryCode, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText)
            const myCountry = countries.find((country) => country.alpha2Code === countryCode)
            if (myCountry !== undefined) {
                callback(undefined, myCountry)
            } else {
                callback('Country not found', undefined)
            }
        } else if (e.target.readyState === 4) {
            callback('An error has occured with HTTP call', undefined)
        }
    })
    
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
}
