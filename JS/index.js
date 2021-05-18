let mxchar = 20;

let myTasks = [];
let arrayback = localStorage.getItem("myTasksArray")


function ValidateName(){
  let x = document.querySelector("#inputName").value;

  if (x = "" && x.length >= mxchar){
    alert("Name of Assigner must be filled and below 20 characters")
  }
}

function ValidateDesc(){
  let y = document.querySelector("#inputDesc").value;

  if (y = "" && y.length >= mxchar){
    alert("Description must be filled and below 20 characters")
  }
}

document.querySelector("#myBtn").addEventListener('click', function(){
  console.log("button was clicked");

  let tname = document.forms["myTaskForm"]["taskname"].value;
  let abname = document.forms["myTaskForm"]["name"].value;
  let desc = document.forms["myTaskForm"]["description"].value;
  let atname = document.forms["myTaskForm"]["assignee"].value;
  let ddate = document.forms["myTaskForm"]["dueDate"].value;
  let status = document.forms["myTaskForm"]["status"].value;

  // console.log(tname,abname,desc,atname,ddate,status);

  storeTask(tname, abname, desc, atname, ddate, status);
  getandCreate();

  document.getElementById("mainTForm").reset();
});

function storeTask(tname, abname, desc, atname, ddate, status){
  let taskObject = {
    "TaskName" : tname,
    "AssignedBy" : abname,
    "Description" : desc,
    "AssignedTo" : atname,
    "DueDate" : ddate,
    "Status" : status
  }

  myTasks.push(taskObject);

  localStorage.setItem("myTasksArray", JSON.stringify(myTasks));
}

function getandCreate(){
  let mySect = document.querySelector("#taskOutput");
  mySect.innerHTML = "";
  for(x in myTasks){
    let taskHTML = `<div class="col-md-3">
    <div class="card">
      <div class="card-header">Task</div>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Task Name</h5>
        </div>
        <p class="mb-1">${myTasks[x]['TaskName']}</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Assigned To:</h5>
        </div>
        <p class="mb-1">${myTasks[x]['AssignedTo']}</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Assigned By</h5>
        </div>
        <p class="mb-1">${myTasks[x]['AssignedBy']}</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Due Date</h5>
        </div>
        <p class="mb-1">${myTasks[x]['DueDate']}</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Status</h5>
        </div>
        <p class="mb-1">${myTasks[x]['Status']}</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Description</h5>
        </div>
        <p class="mb-1">${myTasks[x]['Description']}</p>
      </a>
    </div>
  </div>`
    mySect.innerHTML += taskHTML;
  }
}

