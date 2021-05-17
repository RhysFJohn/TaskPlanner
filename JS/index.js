let maxchar = 20;

function ValidateTaskForm(){
  let x = document.forms["myTaskForm"]["name"].value;
  let y = document.forms["myTaskForm"]["description"].value;
  let z = document.forms["myTaskForm"]["assignee"].value;
  document.forms["myTaskForm"]["dueDate"].value;

  if (x = "" && x.length >= maxchar ){
    alert("Name of Assigner must be filled out and below 20 characters");
  }

  if (y = "" && y.length >= maxchar){
    alert("Description of task must be filled out and below 20 characters")
  }

  if (z = "" && z.length >=maxchar){
    alert("Name of Assignee must be filled out and below 20 characters")
  }
}

ValidateTaskForm();