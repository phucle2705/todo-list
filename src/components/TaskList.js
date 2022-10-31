import React from 'react'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
    return (
        <>
            <ul className='task-list'>
                {tasks
                    .filter((task) => (showIncomplete ? task.status !== true : true))
                    .map((task) => (
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
                    ))
                }    
            </ul>
            <div className='filter-wrapper'>
                <label htmlFor='filter' className='filter-label'>Show incomplete task only</label>
                <input type='checkbox' id='filter' checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)} />
            </div>
        </>
    )
}

export default TaskList