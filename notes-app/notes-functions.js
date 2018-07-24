const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function (notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = function (id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })
    if (noteIndex > -1 ) {
        notes.splice(noteIndex,1)
    }

}

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const linkEl = document.createElement('a')
    const button = document.createElement('button')

    // add button and its text
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        renderNotes(notes, filters)
        saveNotes(notes)
    })
   
    // add note title text and link
    linkEl.setAttribute('href',`/edit.html#${note.id}`)
    if (note.title.length > 0) {
        linkEl.textContent = note.title   
    } else {
        linkEl.textContent = 'Unknown title'
    }
    
    noteEl.appendChild(linkEl)
    
    return noteEl
}

const sortNotes = function (notes,sortBy){
    if (sortBy === 'byEdited') {
        return notes.sort(function(a,b){
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function(a,b){
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes.sort(function(a,b){
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })    }
}

const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function(note, index){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note, index){
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const generateLastEdited = function(timestamp){
    return `Last edited ${moment(timestamp).fromNow()}`
}