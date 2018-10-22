'use strict'

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio= `${this.firstName} is ${this.age}.`

    // this can be called inside the arrow function.  It would not be possible if it was a regular function
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}
Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person ('Chris', 'Philippou', 56, ['biking', 'running'])
me.setName('Ruth Brown')
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)