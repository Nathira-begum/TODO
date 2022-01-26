import React, {useState} from 'react';
import TodoList from './TodoList';
import swal from "sweetalert";

function CreateTodo() {

  const [todo, setTodo]= useState({title: "", done: flase})
  const [todoArr, setTodoArr] =useState([])

  let todos = localStorage.hasOwnProperty("todos")
   ? JSON.parse(localStorage.getItem("todos"))
   : []

   const onChange =(even) => {
     let {value} = event.target
     let obj = {}
     obj ["title"] = value
     obj["done"] = false
     setTodo(obj)

   }

   const createTodo = (event) => {
     const {name} = event.target
     if(EventTarget.key === "Enter" || name === "addTodo"){
       if(todo.title !== ""){
         todos.unshift(todo)
         localStorage.setItem('todos', JSON.stringify(todos))
         setTodo({title: "", done: false})
       }else{
         swal("Oops", "Please write todo first", "error")

       }
     }
   }

   const completeTodo =(i) => {
     if(todos[i]["done"] !== true){
       todos[i]["done"] =truelocalStorage.setItem("todos", JSON.stringify(todos))
       setTodoArr(todos)
       swal;("Good job!", "Todo Completed", "Success");
     }
   }



  return (
    <>
     <div className=' "box'>
       <div className='text-end'>
         <h2>React Todo App</h2>
         <h4>Add a new Todo</h4>
         </div> 
         <div className='text-addTodo'>
           <input type="text" name="todo" placeholder='Write here..' value={todo.title} onKeyPress={createTodo} onChange={onChange}/>
           <button className="btn-addTodo" type="button" name="addTodo" onClick={createTodo}>Add Todo</button>
         </div>
         </div>
         <TodoList todoArr={todoArr}
         completeTodo={completeTodo} />
         </>

  );
}

export default CreateTodo;

