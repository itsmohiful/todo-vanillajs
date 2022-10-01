//select element and assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");


//create task
let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    //bind new task to complete list
    bindInCompleteItem(listItem, completeTask);

}


//store created task in list
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}


//complete task function
let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete';

    listItem.appendChild(deleteBtn);
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}


//delete task function
let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


//listen checkbox click
let bindInCompleteItem = function(taskItem, checkboxclick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}

//listen delete button click
let bindCompleteItems = function(taskItem, deleteButtonClick){
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteButtonClick;
}


//dynamic show task
for(let i=0; i < todoUl.children.length; i++){
    bindInCompleteItem(todoUl.children[i], completeTask);
}

//dynamic delete task
for(let i=0; i < completeUl.children.length; i++){
    bindCompleteItems(completeUl.children[i], deleteTask);
    
}


//add listener in submiting task
form.addEventListener('submit', addTask);