let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes,filters)

document.querySelector('#add-note').addEventListener('click', function(e) {
    const noteUUID = uuidv4()
    const now = moment().valueOf()
    notes.push({
        id: noteUUID,
        createdAt: now,
        updatedAt: now,
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes,filters)
    location.assign(`/edit.html#${noteUUID}`)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})
