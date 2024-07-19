let todositemcontainer=document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");
let savetodobutton=document.getElementById("savetodobutton");

function gettodofromlocalstorage(){
  let stringifytodo=localStorage.getItem("todoList");
  let parsetodo=JSON.parse(stringifytodo);
  if(parsetodo===null){
    return [];
  }
  else{
    return parsetodo;
  }
}


let todoList=gettodofromlocalstorage();
savetodobutton.onclick=function(){
  localStorage.setItem("todoList",JSON.stringify(todoList));
}

function ontodolist(checkboxId,labelId,todoId){
  let checkboxElement=document.getElementById(checkboxId);
  let labelElement=document.getElementById(labelId);
  labelElement.classList.toggle("checked");
  
  let todoObjectIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;

    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObject = todoList[todoObjectIndex];

  if(todoObject.isChecked === true){
    todoObject.isChecked = false;
  } else {
    todoObject.isChecked = true;
  }
}
function onDeletetodo(todoId){
  let labelElement=document.getElementById(todoId);
  todositemcontainer.removeChild(labelElement);
  
  let deletetodo=todoList.findIndex(function(eachitem){
     let eachtodoId="todo"+eachitem.uniqueNo;
     if(eachtodoId===todoId){
         return true;
     }
     else{
         return false;
     }
  });
todoList.splice(deletetodo,1);
console.log(todoList);
}

function createAndAppendTodo(todo){
let  checkboxId="checkbox" + todo.uniqueNo;
let labelId="label"+todo.uniqueNo;
let todoId="todo"+todo.uniqueNo;

  let todoElement=document.createElement("li");
  todoElement.id=todoId;
  todoElement.classList.add("todo-item-container","d-flex","flex-row");
  todositemcontainer.appendChild(todoElement);

let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id=checkboxId;
inputElement.classList.add("checkbox-input");
inputElement.checked=todo.isChecked;
inputElement.onclick=function(){
  ontodolist(checkboxId,labelId,todoId);
}
todoElement.appendChild(inputElement);

let labelContainer=document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
todoElement.appendChild(labelContainer);

let labelElement=document.createElement("label");
labelElement.setAttribute("for",checkboxId);
labelElement.id=labelId;
labelElement.classList.add("checkbox-label");
labelElement.textContent=todo.text;
if(todo.isChecked===true){
    labelElement.classList.add("checked");
}
labelContainer.appendChild(labelElement);

let deleteiconcontainer=document.createElement("div");
deleteiconcontainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteiconcontainer);

let deleteicon=document.createElement("i");
deleteicon.classList.add("far","fa-trash-alt","delete-icon");
deleteicon.onclick=function(){
  onDeletetodo(todoId);
}
labelContainer.appendChild(deleteicon);

}


for(let todo of todoList){
  createAndAppendTodo(todo);
}

function addTodo(){
  let todocount=todoList.length;
  todocount=todocount+1;

    let userElement=document.getElementById("todoUserInput");
    let userInputValue=userElement.value;

    if(userInputValue===""){
      alert("enter vaid text");
      return;
    }
    
    let newtodo={
      text:userInputValue,
      uniqueNo:todocount,
      isChecked:false
    };
    todoList.push(newtodo);
   createAndAppendTodo(newtodo);
   userElement.value=""; 
  }
addTodoButton.onclick=function(){
  addTodo();
}
