
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //CreateLI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CompletedButton
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    // //EditButton
    // const editButton = document.createElement('button');
    // editButton.innerHTML = "<i class='fas fa-pen'> </i>";
    // editButton.classList.add("edit-btn");
    // todoDiv.appendChild(editButton);


    //Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'> </i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    

    //Append to list
    todoList.appendChild(todoDiv);
    //ClearTo-do
    todoInput.value="";

}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

        //Animation
        // todo.classList.add("fall");
        // todo.addEventListener('transitionEnd', function(){
            todo.remove();
        // } ) ;
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

   
    if(item.classList[0] === "edit-btn"){
        const todo = item.parentElement;
        var editInput=listItem.querySelector('input[type=text]');
        // todo.classList.toggle("edit");
        todo.innerText=editInput.value;
    }



}

function filterTodo(e){
    const tody = todoList.childNodes;
    tody.forEach(function(todo) {
        switch (e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
        }
    });
}





