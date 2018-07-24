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

const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function (id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

//
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')
    
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function(){
        toggleTodo(todo.id)
        renderTodos(todos,filters)
        saveTodos(todos)
    })

    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        removeTodo(todo.id)
        renderTodos(todos,filters)
        saveTodos(todos)
    })
    
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
