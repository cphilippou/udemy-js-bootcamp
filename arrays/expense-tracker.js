const account = {
    name: 'Christos',
    expenses: [],
    income: [],
    addExpense: function (descr, amt){
        this.expenses.push({
            description: descr,
            amount: amt
        })
    },
    addIncome: function (descr, amt) {
        this.income.push({
            description: descr,
            amount: amt
        })
    },
    getAccountSummary: function () {
        let totExp = 0
        this.expenses.forEach(function (exp, index) {
            totExp = totExp + exp.amount
        })
        let totInc = 0
        this.income.forEach(function (incm, index) {
            totInc = totInc + incm.amount
        })
        return `${this.name} has a balance of $${totInc - totExp}. $${totInc} in income. $${totExp} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())




