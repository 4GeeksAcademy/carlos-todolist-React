import React, {useState, useEffect} from "react";
import Task from "../component/Task";


const ToDoList = () => {

    const [newTask, setNewTask] = useState ("");
    
    const [taskList, setTaskList] = useState([]);
    
    const loadTasks = async() => {
        const response = await fetch("https://playground.4geeks.com/todo/users/cdalzate")
        const data = await response.json();
        setTaskList(data.todos)
    }   

    useEffect(()=>{
        loadTasks();
    } ,[])

    return (
        
            <div className="container mt-5 w-100" >
                <input type="text" value={newTask} placeholder="Write your new task"
                    onChange={(event) => setNewTask(event.target.value)}

                    onKeyUp={(event) => {
                        if(event.key === "Enter"){
                        setTaskList([newTask, ...taskList]);
                            setNewTask('');  
                        }
                    }}
                    className="full-width-input"
                />
                    {(taskList.length == 0) && <div className="noTasks">No tasks, add a task</div> }
                    {taskList.map((tarea, indice)=> (<Task task={tarea} key={indice} onRemove={()=>{
                    setTaskList(taskList.filter((_tarea, indiceBorrar)=>indice != indiceBorrar))
                    }}/>))}
                <p className="contadorTareas text-start">{taskList.length} item left</p>
            </div>
             
        
    );
}

export default ToDoList;