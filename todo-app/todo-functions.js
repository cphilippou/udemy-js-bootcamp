'use strict'

// get data from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return (todosJSON) ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//store notes in localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id )
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

//
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')
    
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos(todos,filters)
        saveTodos(todos)
    })

    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos(todos,filters)
        saveTodos(todos)
    })
    
    return todoEl
}

//
const generateSummaryTodoDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} things to do.`
    return summary
}

//
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(function(todo, index){
        
        if (!filters.hideCompleted) {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) 
        } else {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) && (!todo.completed)
        }
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = todos.filter( (todo, index) => !todo.completed)
    document.querySelector('#todos').appendChild(generateSummaryTodoDOM(incompleteTodos))
    
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
