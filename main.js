const form = document.getElementById('formAssign')
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji Celebrating" />'
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji Disappointed" />';
const assignments = [];
const grades = [];
const spanApproved = '<span class="result approved">Approved</span>'
const spanDisapproved = '<span class="result disapproved">Disapproved</span>'
const minimumGrade = parseFloat(prompt("Enter the minimum grade: "))

let linesB = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addLine()
    updateTable()
    updateFinalAverage()
});

function addLine() {
    const inputNameAssign = document.getElementById('nameAssign');
    const inputGradesAssign = document.getElementById('gradesAssign')

    if (assignments.includes(inputNameAssign.value)) {
        alert(`Assignment: ${inputNameAssign.value} has already been entered`)
    } else {
        assignments.push(inputNameAssign.value)
        grades.push(parseFloat(inputGradesAssign.value))


        let lineA = '<tr>';
        lineA += `<td>${inputNameAssign.value}</td>`
        lineA += `<td>${inputGradesAssign.value}</td>`
        lineA += `<td>${inputGradesAssign.value >= minimumGrade ? imgApproved : imgDisapproved}</td>`
        lineA += `</tr>`;

        linesB += lineA;
    }
    inputNameAssign.value = ''
    inputGradesAssign.value = ''
}

function updateTable() {
    const bodyTable = document.querySelector('tbody')
    bodyTable.innerHTML = linesB
}

function updateFinalAverage() {
    const averageFinal = calcFinalAverage()

    document.getElementById('average-final-value').innerHTML = averageFinal
    document.getElementById('average-final-result').innerHTML = averageFinal >= minimumGrade ? spanApproved : spanDisapproved;

}

function calcFinalAverage() {
    let gradesSum = 0

    for (let i = 0; i < grades.length; i++) {
        gradesSum += grades[i]
    }

    return (gradesSum / grades.length).toFixed(1)
}