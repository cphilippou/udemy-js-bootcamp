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

// todos.splice(2,1)
// todos.push('todo 6')
// todos.shift()

// console.log(`You have ${todos.length} todos`)

// todos.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let cnt = 0; cnt < todos.length; cnt++) {
//     console.log(`${cnt+1}. ${todos[cnt]}`)
// }

// // console.log(todos)

// // const deleteTodo = function (todos, textToDelete) {
// //     const index = todos.findIndex(function(item, index){
// //         return item.text.toUpperCase() === textToDelete.toUpperCase()
// //     })
// //     console.log(index)
// //     if (index >= 0) {
// //         todos.splice(index,1)
// //     }
// // }

// deleteTodo (todos, 'Todo 6')
// console.log(todos)

// const getThingsToDo = function (todos) {
//     return todos.filter(function(todo, index){
//         return !todo.completed
    
//     })
// }

// console.log(getThingsToDo(todos))

const sortToDos = function (todos){
    todos.sort(function(a,b){
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed === true && !b.completed) {
            return 1
        } else {
            return 0
        }

    })
}

sortToDos(todos)
console.log(todos)