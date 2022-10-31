import React, { useState } from 'react';
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([
        { title: "Learn React", status: false, id: "task_1", }
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
            <h1 className='title'>Todo List
                <span>Get things done, one at a time.</span>
            </h1>
            <ul className='task-list'>
                {tasks
                    .filter(task => showIncomplete ? task.status !== true : true)
                    .map(task => (
                        <li key={task.id} className={task.status ? 'done' : ''}>
                            <span className='label'>{task.title}</span>
                            <div className='actions'>
                                <input
                                    type='checkbox'
                                    className='btn-action btn-action-done'
                                    checked={Boolean(task.status)}
                                    onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                                />
                                <button
                                    className='btn-action btn-action-delete'
                                    onClick={() => removeTask(task.id)}
                                >✖</button>
                            </div>
                        </li>
                ))}
                
            </ul>
            <div className='filter-wrapper'>
                <label htmlFor='filter' className='filter-label'>Show incomplete task only</label>
                <input type='checkbox' id='filter' checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)} />
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='newitem'>Add to the list</label>
                <input type='text' id='newitem' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button type='submit'>Add item</button>
            </form>
        </div>
    )
}

export default App