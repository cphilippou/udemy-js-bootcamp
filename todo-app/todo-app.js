const todos = [{
    text:'todo 1',
    completed: false
 }, {
     text: 'todo 2',
     completed: true
  }, {
      text: 'todo 3',
      completed: false
  }, {
      text:'todo 4',
      completed: false 
  }, {
      text: 'todo 5',
      completed: true
  }]


const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo, index){
        if (!filters.hideCompleted) {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) 
        } else {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) && (!todo.completed)
        }
    })

    const incompleteTodos = todos.filter(function(todo, index){
        return !todo.completed 
    })
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} to do.`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function(todo){
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })


}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()

    todos.push({
        text: e.target.elements.newToDo.value,
        completed: false
    })
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