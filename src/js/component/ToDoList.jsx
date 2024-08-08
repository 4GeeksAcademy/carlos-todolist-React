import React, {useState} from "react";
import Task from "../component/Task";


const ToDoList = () => {

    const [newTask, setNewTask] = useState ([]);
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="container" >
            <input type="text" value={newTask} placeholder="Write your new task"
				onChange={(event) => setNewTask(event.target.value)}

				onKeyUp={(event) => {
                    if(event.key === "Enter"){
                      setTaskList([newTask, ...taskList]);
                        setNewTask('');  
                    }
                }}
			/>
            {(taskList.length == 0) && <div>No tasks, add a task</div> }
            {taskList.map((tarea, indice)=> (<Task task={tarea} key={indice} onRemove={()=>{
                
            }}/>))}
            <p>{taskList.length} item left</p>
        </div>
    );
}

export default ToDoList;