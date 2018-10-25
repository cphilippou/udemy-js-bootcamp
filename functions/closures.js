const myFunction = () => {
    const myMessage = 'This is my message'
    const printMessage = () => {
        console.log(myMessage)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

//Tipper
const createTipper = (percentTip) => {
    return (amt) => {
        return percentTip*amt/100
    }
}

const Tipper15 = createTipper(15)
const Tipper20 = createTipper(20)
console.log(Tipper15(100))
console.log(Tipper20(100))
