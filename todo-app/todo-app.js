
const filters = {
    searchText: '',
    hideCompleted: false
}

const todos = getSavedTodos()


renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()

    todos.push({
        id: uuidv4(),
        text: e.target.elements.newToDo.value,
        completed: false
    })

    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newToDo.value = ''
})

document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})