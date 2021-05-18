// max characters for a value
let mxchar = 20;

let myTasks = [];
let arrayBack = localStorage.getItem("myTasksArray");

// validation for task form
function validateTaskForm(){
  let name = document.forms["myTaskForm"]["name"];
  let descript = document.forms["myTaskForm"]["description"];
  let assignee = document.forms["myTaskForm"]["assignee"];

  if(name.value == "" && name.value.length >= mxchar){
    alert("Please enter a name below 20 characters");
    name.focus();
  }

  if(descript.value == "" && descript.value.length >= mxchar){
    alert("Please Enter a description below 20 characters");
    descript.focus();
  }

  if(assignee.value == "" && assignee.value.length >= mxchar){
    alert("Please Enter a description below 20 characters");
    assignee.focus();
  }
  return false;
}
// when btn is clicked it will store the task in localstorage and then display it as a card below
document.querySelector("#myBtn").addEventListener('click', function(){
  console.log("button was clicked");

  let tname = document.forms["myTaskForm"]["taskname"].value;
  let abname = document.forms["myTaskForm"]["name"].value;
  let desc = document.forms["myTaskForm"]["description"].value;
  let atname = document.forms["myTaskForm"]["assignee"].value;
  let ddate = document.forms["myTaskForm"]["dueDate"].value;
  let status = document.forms["myTaskForm"]["status"].value;

  // console.log(tname,abname,desc,atname,ddate,status);

  // validation();
  storeTask(tname, abname, desc, atname, ddate, status);
  getandCreate();

  document.getElementById("mainTForm").reset();
});

// stores task within array and then turns the values into strings
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
// When you exit the session this keeps the cards in localStorage
if(arrayBack){
  myTasks = JSON.parse(arrayBack)
  getandCreate(myTasks)
}else {
  myTasks = []
}