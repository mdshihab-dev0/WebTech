let students = [];

function validateForm() {
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let studentId = document.getElementById("studentId").value;
let email = document.getElementById("email").value;
let creditCompleted = document.getElementById("creditCompleted").value;
let dept = document.getElementById("dept").value;

document.getElementById("errFirstName").innerHTML = "";
document.getElementById("errLastName").innerHTML = "";
document.getElementById("errStudentId").innerHTML = "";
document.getElementById("errEmail").innerHTML = "";
document.getElementById("errCreditCompleted").innerHTML = "";
document.getElementById("errDept").innerHTML = "";

if (firstName == "" || lastName == "") {
document.getElementById("errFirstName").innerHTML = "First and Last Name are required.";
}

if (!email.endsWith("@student.aiub.edu")) {
document.getElementById("errEmail").innerHTML = "Email must end with @student.aiub.edu";
}

if (studentId[2] != "-" || studentId[8] != "-") {
document.getElementById("errStudentId").innerHTML = "Student ID format: 22-12345-1";
}

if (dept == "") {
document.getElementById("errDept").innerHTML = "Please select a department.";
}

if (creditCompleted == "" || parseInt(creditCompleted) < 0 || parseInt(creditCompleted) > 148) {
document.getElementById("errCreditCompleted").innerHTML = "Credits must be between 0 and 148.";
}

let newStudent = {
firstName: firstName,
lastName: lastName,
studentId: studentId,
email: email,
creditCompleted: parseInt(creditCompleted),
dept: dept
};

students.push(newStudent);

updateTable();

document.getElementById("firstName").value = "";
document.getElementById("lastName").value = "";
document.getElementById("studentId").value = "";
document.getElementById("email").value = "";
document.getElementById("creditCompleted").value = "";
document.getElementById("dept").value = "";

return false;
}

function updateTable() {
let rows = "";

for (let i = 0; i < students.length; i++) {
rows = rows + "<tr>";
rows = rows + "<td>" + (i + 1) + "</td>";
rows = rows + "<td>" + students[i].firstName + "</td>";
rows = rows + "<td>" + students[i].lastName + "</td>";
rows = rows + "<td>" + students[i].studentId + "</td>";
rows = rows + "<td>" + students[i].email + "</td>";
rows = rows + "<td>" + students[i].creditCompleted + "</td>";
rows = rows + "<td>" + students[i].dept + "</td>";
rows = rows + "</tr>";
}

document.getElementById("studentTable").innerHTML = "<tr><th>Serial No</th><th>Fisrt Name</th><th>Last Name</th><th>Student ID</th><th>Email</th><th>Credit Complete</th><th>Department</th></tr>" + rows;
document.getElementById("total").innerHTML = "Total students : " + students.length;

return false;
}
