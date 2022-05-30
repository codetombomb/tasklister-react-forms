import React from 'react'

const Todo = ({task, handleDeleteTodo}) => {
    return <li>{task.description}<button onClick={() => {handleDeleteTodo(task)}}>X</button></li>
}

export default Todo