const toDOForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDOList = document.getElementById("todo-list");
const toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDO(event){
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click",deleteToDO) ;
    li.appendChild(span);
    li.appendChild(button);
    toDOList.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}
toDOForm.addEventListener("submit",handleToDosubmit);
