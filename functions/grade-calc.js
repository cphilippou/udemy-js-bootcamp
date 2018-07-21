// student score exercise

let gradeCalc = function (score = 0, totPossible = 100) {
    let gradeScore = (score / totPossible) * 100
    let grade = ''
    let article = ''
    if (gradeScore <= 59) {
       grade = 'F' 
       article = 'an'
    } else if (gradeScore <= 69) {
        grade = 'D'
        article = 'a'
    } else if (gradeScore <= 79) {
        grade = 'C'
        article = 'a'
    } else if (gradeScore <= 89) {
        grade = 'B'
        article = 'a'
    } else {
        grade = 'A'
        article = 'an'
    }
    return `${score}/${totPossible} -> You got ${article} ${grade} (${gradeScore}%)!`
}

console.log(gradeCalc(91,200))
console.log(gradeCalc(null,200))
console.log(gradeCalc(91,50))
console.log(gradeCalc(91))



