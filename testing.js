// Update function
function updateCard(){
  let updateButton = window.event.target;
  let location; 
  let taskID = myTask[x]['ID'];
  for (let u = 0; u < myTask.length; u++){
    if(myTask[u]['ID'] == taskID){
      myTask[u];
      location = u;
    }
  }
    document.querySelector('#Name').value = myTask[x]["Name"]
    document.querySelector('#Description').value = myTask[x]['Description']
    document.querySelector('#Assignedto').value = myTask[x]['Assignedto']
    document.querySelector('#Duedate').value = myTask[x]['Duedate']
    document.querySelector('#Status').value = myTask[x]['Status']
    
    document.querySelector('#myButton').outerHTML = `<button type="button" id="mySaveButton" class="btn btn-primary">Save Updated Task</button>`
    
    document.querySelector('#mySaveButton').addEventListener('click', function(){
      saveUpdate(taskID, location)
    })
  }
  function saveUpdate(taskID, location){
    const Name = document.querySelector("#Name").value;
    const Description = document.querySelector("#Description").value;
    const Assignedto = document.querySelector("#Assignedto").value;
    const DueDate = document.querySelector("#Duedate").value;
    const Status = document.querySelector("#Status").value;
    JObject = {
      "Name": Name,
      "Description": Description,
      "Assignedto": Assignedto,
      "Duedate": DueDate,
      "Status": Status,
      "ID": taskID
    }
    myTask[location] = JObject
    localStorage.setItem("submittedTask", JSON.stringify(myTask));
    document.location.reload()
  }
  
  
  
  
  
  
  
  
  
  
  