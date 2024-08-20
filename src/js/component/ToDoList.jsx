import React, {useState, useEffect} from "react";
import Task from "../component/Task";


const ToDoList = () => {

    const [newTask, setNewTask] = useState ("");
    
    const [taskList, setTaskList] = useState([]);

    
    const createTask = async() => {
        const updatedTasks = [...taskList, {label: newTask, is_done: false}];

        const response = await fetch("https://playground.4geeks.com/todo/todos/cdalzate91", {
            method: "POST",
            body: JSON.stringify({
                label: newTask,
                is_done: false
            }),
            headers: {
                "Content-Type": "application/json"
            }        
        })
        if(response.ok){
            loadTasks();
            setNewTask('');
        }
    }
    
    const deleteTask = async(todoId, indice) => {
        
        const response = await fetch("https://playground.4geeks.com/todo/todos/" + todoId, {
            method: "DELETE",
        })
        if(response.ok){
            setTaskList(taskList.filter((_tarea, indiceBorrar)=>indice != indiceBorrar))
        }
    }

    const loadTasks = async() => {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/cdalzate91")
            const data = await response.json();
            setTaskList(data.todos)   
        } catch (error) {
            console.log(error);
        }
    }   

    const createUser = async() => {
        const response = await fetch("https://playground.4geeks.com/todo/users/cdalzate91", {
            method: "POST",
       })
    }

    useEffect(()=>{
        createUser();
        loadTasks();
    } ,[])

    return (
        
            <div className="container mt-5 w-100" >
                <input type="text" value={newTask} placeholder="Write your new task"
                    onChange={(event) => setNewTask(event.target.value)}

                    onKeyUp={(event) => {
                        if(event.key === "Enter"){
                        createTask();
                        }
                    }}
                    className="full-width-input"
                />
                    {(taskList.length == 0) && <div className="noTasks">No tasks, add a task</div> }
                    {taskList.map((tarea, indice) => (
                        <Task 
                            task={tarea} 
                            key={indice} 
                            onRemove={()=>{
                                deleteTask(tarea.id, indice)
                    }}/>))}
                <p className="contadorTareas text-start">{taskList.length} item left</p>
                

                {/* Agregar código de eliminar tarea del servidor */}
                <button className="btn btn-success" onClick={() => setTaskList([])}>
                    Clear    
                </button>
            
            </div>
            
             
        
    );
}

export default ToDoList;