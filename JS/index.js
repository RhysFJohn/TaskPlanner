let myTasks = [];
let arrayBack = localStorage.getItem("myTasksArray");


// when btn is clicked it will store the task in localstorage and then display it as a card below
document.querySelector("#myBtn").addEventListener('click', function(){
  console.log("button was clicked");

  const tName = document.forms["myTaskForm"]["taskname"].value;
  const aBName = document.forms["myTaskForm"]["name"].value;
  const desc = document.forms["myTaskForm"]["description"].value;
  const aTName = document.forms["myTaskForm"]["assignee"].value;
  const dueDate = document.forms["myTaskForm"]["dueDate"].value;
  const status = document.forms["myTaskForm"]["status"].value;

  let allValuesValid = validateTaskForm(tName, aBName, desc, aTName, dueDate, status);

  if (allValuesValid == true){
    console.log("all valid");
    createTaskObject(tName , aBName, desc, aTName, dueDate, status);
    console.log(myTasks)
    getandCreate();
  } else {
    console.log("not valid")
  }

  document.getElementById("mainTForm").reset();
});

// validation for task form
function validateTaskForm(tName , aBName, desc, aTName, dueDate, status){
  let isAllValid = false;

  if ((tName) && ((aTName.length > 0) && (aTName.length < 20)) && ((aBName.length > 0) && (aBName.length < 20)) && ((desc.length > 10) && (desc.length < 40)) && (dueDate) && (status)){
    isAllValid = true;
    return isAllValid;
  }
  
}

// stores task within array and then turns the values into strings
function createTaskObject(tName , aBName, desc, aTName, dueDate, status){
  let ID = 0;

  if (myTasks.length == 0){
    ID = 1
  } else {
    let lastItemID = myTasks[myTasks.length-1].ID;
    ID = lastItemID + 1
  }
  
  let taskObject = {
    "TaskName" : tName,
    "AssignedBy" : aBName,
    "Description" : desc,
    "AssignedTo" : aTName,
    "DueDate" : dueDate,
    "Status" : status,
    "ID" : ID
  }

  

  myTasks.push(taskObject);

  localStorage.setItem("myTasksArray", JSON.stringify(myTasks));
}
// this function displays the cards
function getandCreate(){
  let mySect = document.querySelector("#taskOutput");
  // let mySect2 = document.querySelector('#slineOutput');
  mySect.innerHTML = "";
  // mySect2 = "";

  for(x in myTasks){
    let taskHTML = `<div class="col-md-3">
    <div class="card">
      <div class="card-header">Task</div>
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
    </div>
  </div>`
    mySect.innerHTML += taskHTML;

  //   let slineHTML = `<div class="list-group-item list-group-item-action">
  //   <div class="d-flex w-100 justify-content-between">
  //     <h5 class="mb-1"> Task for ${myTasks[x]['A`ssignedTo']}</h5>
  //     <small class="text-muted">${myTasks[x]['DueDate']}</small>
  //   </div>
  //   <p class="mb-1">${myTasks[x]['TaskName']}</p>
  //   <small class="text-muted">${myTasks[x]['Description']}</small>
  // </div>`
  //   mySect2.innerHTML += slineHTML;
  }
}

// Function to view all tasks
function getAllTasks(){

}

// function create tasks
function addTask(task){


}

// function to delete tasks
function deleteTask(task){

}

// function to update tasks
function updateTask(){

}

// When you exit the session this keeps the cards in localStorage
if(arrayBack){
  myTasks = JSON.parse(arrayBack)
  getandCreate(myTasks)
}else {
  myTasks = []
}