let myTasks = []
let arrayBack = localStorage.getItem("myTasksArray")


// when btn is clicked it will store the task in localstorage and then display it as a card below and on the side
document.querySelector("#myBtn").addEventListener('click', function(){
  // Just to make sure button is wokring
  console.log("button was clicked");

  const tName = document.forms["myTaskForm"]["taskname"].value;
  const aBName = document.forms["myTaskForm"]["name"].value;
  const desc = document.forms["myTaskForm"]["description"].value;
  const aTName = document.forms["myTaskForm"]["assignee"].value;
  const dueDate = document.forms["myTaskForm"]["dueDate"].value;
  const status = document.forms["myTaskForm"]["status"].value;

   // variable to call function
  let allValuesValid = validateTaskForm(tName, aBName, desc, aTName, dueDate, status);

  // if statement saying if all values are valid then add task otherwise alert the user to complete everything correctly
  if (allValuesValid == true){
    console.log("Valid");
    createTaskObject(tName , aBName, desc, aTName, dueDate, status);
    addTask();
  } else {
    console.log("Invalid")
    alert("Please make sure everything is completed correctly!\nTask Name must be filled\nName must be less than 20 characters\nDescription must be less than 40 characters\nAssigned to must be less than 20 characters\nDue Date and Status must be completed.")
  }
  // resets form when the button is click for sanitation
  document.getElementById("mainTForm").reset();
});

// validation for task form
function validateTaskForm(tName , aBName, desc, aTName, dueDate, status){
  let isAllValid = false;
  // if statement stating if the requirements are matching to this then return true
  if ((tName) && ((aTName.length > 0) && (aTName.length < 20)) && ((aBName.length > 0) && (aBName.length < 20)) && ((desc.length > 0) && (desc.length < 40)) && (dueDate) && (status)){
    isAllValid = true;
    return isAllValid;
  }
}

// stores task within array and then turns the values into strings
function createTaskObject(tName , aBName, desc, aTName, dueDate, status){
  let ID = 0;
  // if tasks array is equal to 0 make ID 1 otherwise add a new 1
  if (myTasks.length == 0){
    ID = 1
  } else {
    let lastItemID = myTasks[myTasks.length-1].ID;
    ID = lastItemID + 1
  }
  // object creation 
  let taskObject = {
    "TaskName" : tName,
    "AssignedBy" : aBName,
    "Description" : desc,
    "AssignedTo" : aTName,
    "DueDate" : dueDate,
    "Status" : status,
    "ID" : ID
  }
  // push object to array
  myTasks.push(taskObject);

  localStorage.setItem("myTasksArray", JSON.stringify(myTasks));
}

// Function to view all tasks
// function getAllTasks(){

// }

// function create tasks
function addTask(){
  // variable equal to particular id where the output would go. refer to index.html ln86
  let mySect = document.querySelector("#taskOutput");
  // it would be empty at first
  mySect.innerHTML = "";
  // for loop to loop through each key value in objects to fill them from the object creation
  for(x in myTasks){
    let taskHTML = `<div class="col-md-3" id="cardCol">
                      <div class="card text-dark bg-info">
                        <div class="card-header d-flex w-100 justify-content-between">
                        <h5>Task</h5>
                        <small>${myTasks[x]['ID']}</small>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Task Name</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['TaskName']}</p>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Assigned To:</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['AssignedTo']}</p>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Assigned By</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['AssignedBy']}</p>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Due Date</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['DueDate']}</p>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Status</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['Status']}</p>
                        </div>
                        <div class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Description</h5>
                          </div>
                          <p class="mb-1">${myTasks[x]['Description']}</p>
                        </div>
                        <div class="card-footer d-flex w-100 justify-content-between">
                          <button type="button" class="btn btn-danger" onclick="deleteTask()" taskID="${myTasks[x]['ID']}">Delete Task</button>
                          <button type="button" class="btn btn-warning" onclick="updateTask()" taskID="${myTasks[x]['ID']}">Update Task</button>
                        </div>
                      </div>
                    </div>`
    // append the card to the id output
    mySect.innerHTML += taskHTML;
  }
  // variable equal to particular id where the output would go. refer to index.html ln86
  let listCol = document.querySelector('#sLineOutput');
  // it would be empty at first
  listCol.innerHTML = "";

  for (y in myTasks){
    let listHTML = `<div class="list-group-item list-group-action flex-column align-items-start" taskID="${myTasks[y]['ID']}">
                      <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">${myTasks[y]['TaskName']} for ${myTasks[y]['AssignedTo']}</h6>
                        <small>Due Date: ${myTasks[y]['DueDate']}</small>
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">Desc: ${myTasks[y]['Description']}</h6>
                      <small>Status: ${myTasks[y]['Status']}</small>
                      </div>
                    </div>`
    // append the card to the id output
    listCol.innerHTML += listHTML;
  }
}

// function to delete tasks
function deleteTask(event){
  // variable targeting specific ID
  let btnClick = window.event.target;

  // remove 2 parentNodes above target
  btnClick.parentNode.parentNode.remove();
  // iterate through array finding the card connected to that specific ID and then remove it using the splice method, and update the object array
  for(item in myTasks){
    if(myTasks[item]['ID'] == myTasks[x]['ID']){
      myTasks.splice(item, 1);
      localStorage.setItem("myTasksArray", JSON.stringify(myTasks));
    }
  }
  // reload page 
  location.reload();
}

// function to update tasks, will do if I have time or in later update maybe
function updateTask(){
  let updateBtnClick = window.event.target;
  let location;
  let taskID = myTasks[x]['ID'];

  for(let item = 0; item < myTasks.length; item++){
    if(myTasks[item]['ID'] == taskID){
      myTasks[item];
      location = item;
    }
  }

  document.forms["myTaskForm"]["taskname"].value = myTasks[x]['TaskName'];
  document.forms["myTaskForm"]["name"].value = myTasks[x]['AssignedBy'];
  document.forms["myTaskForm"]["assignee"].value = myTasks[x]['AssignedTo'];
  document.forms["myTaskForm"]["description"].value = myTasks[x]['Description'];
  document.forms["myTaskForm"]["dueDate"].value = myTasks[x]['DueDate'];
  document.forms["myTaskForm"]["status"].value = myTasks[x]['Status'];

  document.querySelector('#myBtn').outerHTML = `<button type="button" class="btn btn-primary" id="saveBtn">Save Update</button>`

  document.querySelector('#saveBtn').addEventListener('click', function(){
    saveUpdate(taskID, location);
  })
  
  
}

function saveUpdate(taskID, location){
  const tName = document.forms["myTaskForm"]["taskname"].value;
  const aBName = document.forms["myTaskForm"]["name"].value;
  const desc = document.forms["myTaskForm"]["description"].value;
  const aTName = document.forms["myTaskForm"]["assignee"].value;
  const dueDate = document.forms["myTaskForm"]["dueDate"].value;
  const status = document.forms["myTaskForm"]["status"].value;

  taskObject = {
    "TaskName" : tName,
    "AssignedBy" : aBName,
    "Description" : desc,
    "AssignedTo" : aTName,
    "DueDate" : dueDate,
    "Status" : status,
    // there is an error happening ln 214 ID is not defined
    "ID" : taskID
  }
  // push object to array
  myTasks[location] = taskObject;

  localStorage.setItem("myTasksArray", JSON.stringify(myTasks));
  document.location.reload();
}

// When you exit the session this keeps the cards in localStorage
if(arrayBack){
  myTasks = JSON.parse(arrayBack)
  populatePage()
}else {
  myTasks = []
}

function populatePage(){
  for (let i = 0; i < myTasks.length; i++){
    addTask(myTasks[i])
  }
}