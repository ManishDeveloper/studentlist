const studentbox = document.querySelector(".student-box");
const studentslist = document.querySelector(".student-list");
const studentsTable = document.querySelector("table");
const startText = document.querySelector(".start-text");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const tableRow = document.querySelectorAll("tr");


//load all event Listeners
loadEventListeners();

//Event Listeners Functions
function loadEventListeners(){
    //button show list
    button1.addEventListener('click',showStudents);
    //filter student
    button2.addEventListener('click',filterStudents);
}

//student list
function showStudents(){
    studentslist.style.display = 'none';
    startText.style.display = 'block';
    startText.innerHTML = `Please Wait...`
    setTimeout(()=>{
        startText.style.display = 'none';
    studentslist.style.display = 'block';
    let tableData = `<thead>
    <th>Roll No.</th>
    <th>Student Name</th>
    <th>Subjects</th>
    </thead>`;
    tableRow.forEach((student,index)=>{
        if(student.getElementsByTagName('td').length !== 0){
        startText.style.display = 'none';
        studentslist.style.display = 'block';
        tableData += `<tr>
        <td>${student.getElementsByTagName('td')[0].textContent}</td>
        <td>${student.getElementsByTagName('td')[1].textContent}</td>
        <td>${student.getElementsByTagName('td')[2].textContent}</td>
        </tr>`;
        studentsTable.innerHTML = tableData;
        }
    });
    },1500);

    }

//filter students
function filterStudents(){
    let input = prompt('Type Students Roll No., Name, and Subject');

    if(input === '' || input == null) return false;
    let tableData = `<thead>
    <th>Roll No.</th>
    <th>Student Name</th>
    <th>Subjects</th>
    </thead>`;
    tableRow.forEach((student,index)=>{
        //alert(student[index].getElementById());
        studentslist.style.display = 'none';
        startText.style.display = 'block';
        startText.innerHTML = `Please wait..`;
        setTimeout(()=>{
            if(student.getElementsByTagName('td').length !== 0){
                input = input.toLowerCase();
                let rollNo = student.getElementsByTagName('td')[0].textContent.toLowerCase();
                let studentName = student.getElementsByTagName('td')[1].textContent.toLowerCase();
                let subjects = student.getElementsByTagName('td')[2].textContent.toLowerCase();
                if(rollNo.indexOf(input) !== -1 || studentName.indexOf(input) !== -1 || subjects.indexOf(input) !== -1){
                    startText.style.display = 'none';
                    studentslist.style.display = 'block';
                    tableData += `<tr>
                    <td>${student.getElementsByTagName('td')[0].textContent}</td>
                    <td>${student.getElementsByTagName('td')[1].textContent}</td>
                    <td>${student.getElementsByTagName('td')[2].textContent}</td>
                </tr>`;
                    studentsTable.innerHTML = tableData;
                }
            }
            
            else {
                studentslist.style.display = 'none';
                startText.style.display = 'block';
                startText.innerHTML = `No Student Record Found!`
            }
        },1500);
        
    });
}
