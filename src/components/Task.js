import '../App.css';

function Task({ task, changeStatus, deleteTask }) {
    return (
        <div key={task.id} className="task">
            <div className={task.completed ? "text completed" : "text"}>
                {task.task}
            </div>

            <div className="delete" onClick={() => deleteTask(task.id)}>
                DELETE
            </div>

            <div className="completeBtn" onClick={() => changeStatus(task.id)}>
                COMPLETE
            </div>
            
        </div>
    )
}

export default Task