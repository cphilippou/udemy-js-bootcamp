const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeNoteElement = document.querySelector('#remove-note')
const updateAtElement = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updateAtElement.textContent = generateLastEdited(note.updatedAt)


titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updateAtElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updateAtElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeNoteElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        updateAtElement.textContent = generateLastEdited(note.updatedAt)
    }
})