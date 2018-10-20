const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Christos',
    age: 55
}, {
    name: 'Ruth',
    age: 50
}]

const over30Long = people.filter(function(person){
    return person.age > 30
})

const over30 = people.filter((person) => person.age > 30)

console.log(over30)

const age27 = people.find((person) => person.age === 27)
// remember that find returns the first object that meets the condition, 
// whereas, filter returns an array
console.log(`age 27 is ${age27.name}`)