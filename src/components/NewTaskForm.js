import React from 'react'

const NewTaskForm = () => {
    return (
        <form id="create-task-form">
            <label>Task description:</label>
            <input
                type="text"
                id="new-task-description"
                name="new-task-description"
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