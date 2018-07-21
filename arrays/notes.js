const notes = [{
    title:'Note 1',
    body: 'My Note 1 notes'
}, {
    title: 'Note 2', 
    body: 'My Note 2 notes'
},  {
    title: 'Note 3',
    body: 'Note 3 notes'
}]

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)

// })

// console.log(notes.length)
// console.log(notes[1])

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >=0; count--) {
//     console.log(notes[count])
// }

// const index = notes.findIndex(function(note,index){
//     return note.title === 'Note 2'
// })
// console.log(index)

// const findNote = function (notes, titleFind) {
//     const index = notes.findIndex(function (note, i){
//         return note.title.toUpperCase() === titleFind.toUpperCase()
//     }) 
//     return notes[index]
// }

// // const findNote = function (notes, titleFind) {
// //         return notes.find(function (note, i){
// //             return note.title.toUpperCase() === titleFind.toUpperCase()
// //         }) 
// //     }
 

// const note = findNote(notes,'note 3')
// console.log(note)

// const findNotes = function (notes, query) {
//     // const filteredNotes = notes.filter(function(item, index){
//     return notes.filter(function(item, index){
//         const isTitleMatch = item.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = item.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
//     // return filteredNotes
// }


// console.log(findNotes(notes,'2'))

const sortNotes = function(notes) {
    notes.sort(function(a, b){
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)