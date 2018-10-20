'use strict'

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    } 
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex( (note) => note.id === id)
    if (noteIndex > -1 ) {
        notes.splice(noteIndex,1)
    }

}

const generateNoteDOM = (note) => {
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

const sortNotes = (notes,sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a,b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort( (a,b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes.sort( (a,b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })    }
}

const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note, index) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note, index) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const generateLastEdited = ((timestamp) => `Last edited ${moment(timestamp).fromNow()}`)