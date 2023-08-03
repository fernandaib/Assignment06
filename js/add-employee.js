// HANDLE THE LOAD EVENT OF THE WINDOW

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT


// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

let idEmployee = document.getElementById('id');
let nameEmployee = document.getElementById('name');
let extEmployee = document.getElementById('extension');
let emailEmployee = document.getElementById('email');
let department = document.querySelector('#department');

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

let btnSubmit = document.getElementById("submit");
let btnCancel = document.getElementById("cancel");
btnCancel.addEventListener('click', () => close());
btnSubmit.addEventListener('click', () => close());

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

let formEmployee = document.querySelector('form');
formEmployee.addEventListener('submit', (e) =>{
    e.preventDefault();   

    opener.document.getElementById("idWorker").innerHTML = `ID: ${idEmployee.value}`;
    opener.document.getElementById("nameWorker").innerHTML = `Name: ${nameEmployee.value}`;
    opener.document.getElementById("extWorker").innerHTML = `Extension: ${extEmployee.value}`;
    opener.document.getElementById("emailWorker").innerHTML = `Email: ${emailEmployee.value}`;
    opener.document.getElementById("depWorker").innerHTML = `Department: ${department.value}`;
    self.close();
});