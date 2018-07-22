// get data from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//store notes in localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
}

//
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    return todoEl
}

//
const generateSummaryTodoDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} things to do.`
    return summary
}

//
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo, index){
        debugger
        if (!filters.hideCompleted) {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) 
        } else {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) && (!todo.completed)
        }
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = todos.filter(function(todo, index){
        return !todo.completed 
    })
    document.querySelector('#todos').appendChild(generateSummaryTodoDOM(incompleteTodos))
    
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}