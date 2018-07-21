//DOM - doument object model

// query firt <p> and remove
// const p = document.querySelector('p')
// p.remove()

// query all <p> and remove all of them
// const ps = document.querySelectorAll('p')
// ps.forEach( function (p, index) {
//     console.log(p)
//     if (index === 0) {
//         p.textContent = 'New Text 1'
//         // p.textContent.toUpperCase  - could not make this work

//     } else {
//         p.textContent = 'new text 2'
        
//     }

//     // p.remove()
// })

// //Add new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is my new paragraph'
// document.querySelector('body').appendChild(newParagraph)

// document.querySelector('button').addEventListener('click', function(e){
//    if (e.target.textContent === 'clicked') {
//         e.target.textContent = 'Add Note'
//    } else {
//         e.target.textContent = 'clicked'
//    }
// })

document.querySelector('#add-note').addEventListener('click', function(e) {
    e.target.textContent = 'add note clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    e.target.textContent = 'remove all clicked'
    document.querySelectorAll('.note').forEach(function(n){
        n.remove()
    })
})
