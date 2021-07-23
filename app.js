'use strict';

let container = document.getElementById('container');
let myForm =document.getElementById('myform');
let tableContainer=document.getElementById('table-container');
let tableEl=document.createElement('table');
tableContainer.appendChild(tableEl);

let tasks = [];

function tTask (task,date,urgency){

this.task = task;
this.date = date;
this.urgency=urgency;

tasks.push(this);
saveToLocalStorage ();
}

function createTableHeader (){

    let trEl=document.createElement('tr');
    

    let thTaskEl=document.createElement('th');
    thTaskEl.textcontent="Task";
    trEl.appendChild(thTaskEl);

    let thDateEl=document.createElement('th');
    thDateEl.textcontent="Date";
    trEl.appendChild(thDateEl);

    
    let thUrgencyEl=document.createElement('th');
    thUrgencyEl.textcontent="Urgency";
    trEl.appendChild(thUrgencyEl);

    let thRemoveEl=document.createElement('th');
    thRemoveEl.textcontent="Delete";
    trEl.appendChild(thRemoveEl);

    tableEl.appendChild(trEl);
}


tTask.prototype.render=function() {
 
    let trEl=document.createElement('tr');

    let tdEl1 = document.createElement('td');
    tdEl1.textcontent=this.task;
    trEl.appendChild(tdEl1);

    let tdEl2 = document.createElement('td');
    tdEl2.textcontent=this.date;
    trEl.appendChild(tdEl2);

    let tdEl3 = document.createElement('td');
    tdEl3.textcontent=this.urgency;
    trEl.appendChild(tdEl3);

    let tdEl4 = document.createElement('td');
    tdEl4.textcontent=this.date;
    trEl.appendChild(tdEl4);

    tableEl.appendChild(trEl);
};

// ====================================Form=============================
createTableHeader();
myForm.addEventListener('submit', addtask);

function addtask(event){

    event.preventDefault();
    let task = event.target.task.value;
    let date = event.target.date.value;
    let urgency = event.target.urgency.value;

    let newTask = new tTask (task,date,urgency);

newTask.render();
}


function saveToLocalStorage (){

let saveLocal = JSON.stringify (tasks);
localStorage.setItem('task',saveLocal); 
}

function readFromLocalStorage (){

    let stringObj = localStorage.getItem('task');
    let normalObj = JSON.parse (stringObj);
    if (normalObj !== null) {
        for ( let i=0 ; i < normalObj.length ; i++){

            new tTask (normalObj[i].task, normalObj[i].date,normalObj[i].urgency);
            tasks[i].render();
        }

        
    }
    
}
readFromLocalStorage ();
