let taskArray = [];
let selectedPriority = "not selected";

// define a constructor to create player objects
var TaskObject = function (pTask, pDate, pDescription, pPriority) {
  this.Task = pTask;
  this.Date = pDate;
  this.ID = taskArray.length + 1;
  this.Description = pDescription;  
  this.Priority = pPriority;
}

taskArray.push(new TaskObject("Pay Bills", 04/01/2020, "4", "Morgage, Insurance"));
taskArray.push(new TaskObject("Pick Up Airport", 06/28/2020, "2", "Mom"));

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("buttonAdd").addEventListener("click", function () {
    taskArray.push(new MovieObject(document.getElementById("task").value, document.getElementById("date").value,
      selectedPriority, document.getElementById("desription").value));
});

  $(document).bind("change", "#select-priority", function (event, ui) {
    selectedGenre = $('#select-priority').val();
  });

  document.getElementById("buttonSortTask").addEventListener("click", function () {
    taskArray.sort(dynamicSort("Task"));
    createList();
    document.location.href = "index.html#ListAll";
  });

  document.getElementById("buttonSortPriority").addEventListener("click", function () {
    task.Array.sort(dynamicSort("Priority"));
    createList();
    document.location.href = "index.html#ListAll";
  });

$(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
 // document.getElementById("IDparmHere").innerHTML = "";
  createList();
});
  
  document.getElementById("buttonClear").addEventListener("click", function () {
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
});
  
$(document).on("pagebeforeshow", "#Load", function (event) {   // have to use jQuery 
  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
  });

$(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
  let localID =  document.getElementById("IDparmHere").innerHTML;
  document.getElementById("nTask").innerHTML = "Task: " + taskArray[localID-1].Task;
  document.getElementById("nDate").innerHTML = "Date: " + taskArray[localID - 1].Date;
  document.getElementById("nDescription").innerHTML = "Description: " + taskArray[localID - 1].Description;
  document.getElementById("nPriority").innerHTML = "Priority: " + taskArray[localID - 1].Priority;
 });

});

function createList()
{
  // clear prior data
  var divUserlist = document.getElementById("divTask");
  while (divTask.firstChild) {    // remove any old data so don't get duplicates
  divTask.removeChild(divTask.firstChild);
  };

  var ul = document.createElement('ul');  
  console.log(taskArray);
  taskArray.forEach(function (element,) {   // use handy array forEach method
    var li = document.createElement('li');
    li.innerHTML = "<a data-transition='pop' class='nTasks' data-parm=" + element.ID + "  href='#page3'>Get Details </a> " + element.ID + ":  " + element.Task + "  " + element.Genre;
    ul.appendChild(li);
  });
  divTask.appendChild(ul)

    //set up an event for each new li item, if user clicks any, it writes >>that<< items data-parm into the hidden html 
    var classname = document.getElementsByClassName("nTasks");
    Array.from(classname).forEach(function (element) {
        element.addEventListener('click', function(){
            var parm = this.getAttribute("data-parm");  // passing in the record.Id
            //do something here with parameter on  pickbet page
            document.getElementById("IDparmHere").innerHTML = parm;
            document.location.href = "index.html#Load";
        });
    });
   
};
  

/**
 *  https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
* Function to sort alphabetically an array of objects by some specific key.
* 
* @param {String} property Key of the object to sort.
*/
function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  }
}