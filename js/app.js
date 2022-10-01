//select element and assing them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = ducument.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");


//create task
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innterText = task; 
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}

let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    //bind new task to complete list


}

let bindInCompleteItem = function(taskItem, checkboxclick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}