// const ps = document.querySelectorAll('p')
// let cnt = 0
// ps.forEach(function (p, index) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }  else {
//         cnt++
//         p.textContent = `${cnt}. ${p.textContent}`
//     }    
//     })

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


//Add new element
const getThingsToDo = todos.filter(function(todo){
        return !todo.completed
})

const summary = document.createElement('p')
summary.textContent = `You have ${getThingsToDo.length} to do.`
document.querySelector('body').appendChild(summary)

getThingsToDo.forEach(function(item, index) {
    const newParagraph = document.createElement('h2')
    newParagraph.textContent = `${index + 1}. ${item.text}`
    document.querySelector('body').appendChild(newParagraph)
})

document.querySelector('#add-todo').addEventListener('click', function(){
    console.log('add a todo')
})

document.querySelector('#add-new').addEventListener('input', function(e){
    console.log(e.target.value)
})