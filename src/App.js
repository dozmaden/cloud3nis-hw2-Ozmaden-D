import { useState } from 'react';

import './App.css';
import Task from './components/Task'
import TaskAdd from './components/TaskAdd';

import { v4 as uuidv4 } from 'uuid';

const initialTasks = [
  {
    id: "0",
    task: "Task 1",
    completed: false
  }, {
    id: "1",
    task: "Task 2",
    completed: false
  }, {
    id: "2",
    task: "Task 3",
    completed: false
  }, {
    id: "3",
    task: "Task 4",
    completed: false
  }, {
    id: "4",
    task: "Task 5",
    completed: false
  }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  
  const addTask = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: uuidv4(),
        task: userInput,
        completed: false
      }

      setTasks([...tasks, newTodo])
    }
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter((tasks) => tasks.id !== id)])
  }

  const changeStatus = (id) => {
    setTasks(
      tasks.map(task => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task
      }
    })
    )
  }

  return (
    <div>
      <h1 className="title"> To-do list:  </h1>

      <TaskAdd addTask={addTask} />
      { tasks.map((task) => {
        return (
          <Task
            task={task}
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
        )
      })
      }

    </div>
  );
}

export default App;
