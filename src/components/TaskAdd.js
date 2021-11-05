import React from 'react'
import { useState } from 'react'

import '../App.css';

function TaskAdd( {addTask} ) {
    const [task, setTask] = useState('')
    
    const submitTask = (t) => {
        t.preventDefault()
        addTask(task)
        setTask("")
    }

    const changeTask = (t) => {
        setTask(t.currentTarget.value)
    }

    return (
        <form onSubmit={submitTask}>
            <input
                value={task}
                type="text"
                onChange={changeTask}
            />

            <button> Add Task!</button>
        </form>
    )
}

export default TaskAdd
