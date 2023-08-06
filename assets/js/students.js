let dialogE = qs("dialog");
let studentF = qs("#studentForm");
let addBtn = qs("#addBtn");
let cancelBtn = qs("#cancelButton");
let del = qsa("#deleteBtn");
let cards = qs("#studentsCards");
let students = qs("#students");

addBtn.addEventListener("click" , () => {
    dialogE.showModal();
});

cancelBtn.addEventListener("click" , () => {
    dialogE.close();
});

studentF.addEventListener("submit" , () => {
    const studentFormData = new FormData(studentF);
    const studentObj = Object.fromEntries(studentFormData.entries());
    appendStudent(studentObj);

    studentF.reset();
});

del.forEach(delist => 
    {
        delist.addEventListener("click" , deleteStudents);
    });

function deleteStudents()
{
    this.parentElement.remove();
}



