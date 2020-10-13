//selector
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);


//function
function addTodo(event){
    console.log("hello");
    
    
    // create todo div
    const todoDiv = document.createElement("Div");
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //complete check button
    const completeButton=document.createElement('button');
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // trash button

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv); 

    //clear input value
    todoInput.value="";

}

    //delete function
   function deleteCheck(e) {
       console.log("delete");
       const item = e.target;
       //delete
       if(item.classList[0]==="trash-btn"){

           const todo = item.parentElement;
           todo.classList.add("fall");
           todo.addEventListener("transitionend",function(){
               todo.remove();

           });
        }
            //check mark
        if(item.classList[0]==="complete-btn"){

            const todo = item.parentElement;
            todo.classList.toggle("completed");
         }

    }

