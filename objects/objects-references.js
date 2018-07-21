let myAccount = {
    name: 'Christos',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpenses(myAccount, 2.5)
console.log(myAccount)

let otherAccount = myAccount
otherAccount.income = 1000  
console.log(myAccount)  //the original myAccount is changed

otherAccount = {}
console.log(myAccount)  //the original account is not changed
console.log(otherAccount)

//exercise
let addIncome = function (account, income){
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account){
    return `Account for ${account.name} has $${account.income - account.expenses}.  $${account.income} in income and $${account.expenses} in expense`
}
console.log('exercise begins here')
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 2000)
addExpenses(myAccount, 100)
addExpenses(myAccount, 200)
console.log(getAccountSummary(myAccount))



