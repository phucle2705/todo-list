import React, { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        { title: "Learn React", status: false, id: "task_1", },
        { title: "Learn JS", status: false, id: "task_2", }
    ])

    const [showIncomplete, setShowIncomplete] = useState(false)

    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                title: newTask,
                status: 0,
                id: Date.now(),
            }
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }

    const setTaskStatus = (taskId, status) => {
        setTasks(tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, status };
                }
                return task;
            })
        )
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <div className='container'>
            <Header title='To-Do List' subTitle='Do it' />
            <TaskList
                tasks={tasks}
                showIncomplete={showIncomplete}
                setTaskStatus={setTaskStatus}
                removeTask={removeTask}
                setShowIncomplete={setShowIncomplete}
            />
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='newitem'>Add to the list</label>
                <input type='text' id='newitem' value={newTask} onChange={(e) => setNewTask(e.target.value)} />                <button type='submit'>Add item</button>
            </form>
        </div>
    )
}

export default App