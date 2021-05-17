let mxchar = 20;

function ValidateTaskForm(){
  let x = document.forms["myTaskForm"]["name"].value;
  let y = document.forms["myTaskForm"]["description"].value;
  let z = document.forms["myTaskForm"]["assignee"].value;

  if (x = "" && x.length >= mxchar ){
    alert("Name of Assigner must be filled out and below 20 characters");
  }

  if (y = "" && y.length >= mxchar){
    alert("Description of task must be filled out and below 20 characters")
  }

  if (z = "" && z.length >= mxchar){
    alert("Name of Assignee must be filled out and below 20 characters")
  }
}

document.querySelector("#myBtn").addEventListener('click', function(){
  console.log("button was clicked");
  
  let items = []

  items.push(document.forms["myTaskForm"]["name"].value);
  items.push(document.forms["myTaskForm"]["description"].value);
  items.push(document.forms["myTaskForm"]["assignee"].value);
  items.push(document.forms["myTaskForm"]["dueDate"].value);
  items.push(document.forms["myTaskForm"]["status"].value);

  console.log(items)
})

// function createCards(){

// }

ValidateTaskForm()