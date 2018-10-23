'use strict'

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio () {
        let bio= `${this.firstName} is ${this.age}.`
    
        // this can be called inside the arrow function.  It would not be possible if it was a regular function
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor (firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}` 
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, grade, likes)
        this.grade = grade
    }
    getBio () {
        return this.grade >= 70 ? `${this.firstName} is passing` : `${this.firstName} is falling`
    }
    updateGrade(gradeDelta) {
        this.grade += gradeDelta
    }
}

// defining objects without using the class construct
// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function () {
//     let bio= `${this.firstName} is ${this.age}.`

//     // this can be called inside the arrow function.  It would not be possible if it was a regular function
//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })
//     return bio
// }
// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

const me = new Employee ('Chris', 'Philippou', 56, 'professor', ['biking', 'running'])
me.setName('Ruth Brown')
console.log(me.getBio())
console.log(me.getYearsLeft())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)

const person3 = new Student ('John', 'Olsion', 30, 80)
console.log(person3.getBio())
person3.updateGrade(-30)
console.log(person3.getBio())