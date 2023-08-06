/**
 * returns querySelector
 * @param {string} s
 * @returns {HTMLElement} DomElement
 */

function qs(s) {
    return document.querySelector(s);
};

let qsa = s => document.querySelectorAll(s);

function addStudents(student)
{
    let studentsCards = document.createElement("div");
    studentsCards.classList.add("studentsCards");

    studentsCards.innerHTML =
    `<img src="${student.img}" alt="">
    <h5>${student.firstName} ${student.lastName}</h5>
    <h6>${student.gender}</h6>
    <h6>${student.birthdate}</h6>`;

    let delBtn = document.createElement("button");
    delBtn.classList.add("deleteBtn");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click" , deleteStudents);
    studentsCards.appendChild(delBtn);

    return studentsCards;
}

const appendStudent = student => {
    students.appendChild(addStudents(student));
}
