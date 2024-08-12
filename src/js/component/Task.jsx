import React, {useState} from 'react';

const Task = (props) => {

    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="tareasPorHacer d-flex justify-content-between align-item-center border"
            onMouseEnter={()=>{
                setIsHovered(true);
            }}
            onMouseLeave={()=>{
                setIsHovered(false);
            }}>
            <p className='p-2'>{props.task}</p>
            {(isHovered) && <span className="clickable" onClick={()=>{
                props.onRemove()
            }}>X</span>}
        </div>
    );
}

export default Task;