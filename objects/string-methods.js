let name = ' Cristos Philippou  '

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123password567'
console.log(password.includes('password'))

console.log(name.trim())

//exercise
let isValidPassword = function(pass) {
    return (pass.length >= 8) && (!pass.includes('password'))
}


console.log(isValidPassword('abcde'))
console.log(isValidPassword('abcdef3456'))
console.log(isValidPassword('abcpasswordxyz'))
