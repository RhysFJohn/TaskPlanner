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

  console.log(tname,abname,desc,atname,ddate,status)
})

function storeTask(tname, abname, desc, atname, ddate, status){
  let taskObject = {
    "TaskName" : tname,
    "AssignedBy" : abname,
    "Description" : desc,
    "AssignedTo" : atname,
    "DueDate" : ddate,
    "Status" : status
  }
}

// function createCards(){

// }

