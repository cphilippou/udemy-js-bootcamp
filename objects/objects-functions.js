let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

/*
let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}
*/

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}


let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.summary)
console.log(myBookSummary.pageCountSummary)

console.log(getSummary(myBook).summary)

//exercise
let temp = {
    fahrenheit: null,
    celsius: null,
    kelvin: null
}

temp.fahrenheit = 32

let getTemp = function (f){
    return {
        fahrenheit: `${f}F`,
        celsius: `${(f - 32) * 5 / 9}C`,
        kelvin: `${(f + 459.67) * 5 / 9}K`
    }
}


console.log(getTemp(74))

