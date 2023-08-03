// HANDLE THE LOAD EVENT OF THE WINDOW




// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
let btnAddWorker = document.getElementById('btnAddEmployee');
let myWindow;

function openWin() {
  myWindow = window.open("add-employee.html", "_blank", "width=200, height=100");
}

function resizeWin() {
  myWindow.resizeTo(700, 800);
}

function moveWin() {
    myWindow.moveTo((screen.width-700)/2,(screen.height-800)/2);
  }

btnAddWorker.addEventListener('click', openWin);
btnAddWorker.addEventListener('click', resizeWin);
btnAddWorker.addEventListener('click', moveWin);





