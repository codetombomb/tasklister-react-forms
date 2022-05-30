import React from 'react'
import { useState } from 'react'

const NewTaskForm = ({handleAddTodo}) => {
    const [ newTask, setNewTask ] = useState('')

    function handleSetNewTask(e){
        setNewTask(e.target.value)
    }

    return (
        <form id="create-task-form" onSubmit={(e) => {
            e.preventDefault()
            handleAddTodo(newTask)
            }}>
            <label>Task description:</label>
            <input
                type="text"
                id="new-task-description"
                name="new-task-description"
                value={newTask}
                onChange={handleSetNewTask}
                placeholder="description"
            />
            <input
                type="submit"
                value="Create New Task"
            />
        </form>
    )
}

export default NewTaskForm