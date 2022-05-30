import React from 'react'
import Todo from './Todo'
const MyTodosContainer = ({todos, handleDeleteTodo}) => {
    return (
        <div id="list">
            <h2>My Todos:</h2>
            <ul id="tasks">
                {todos.map((task) => {
                    return <Todo task={task} key={task.id} handleDeleteTodo={handleDeleteTodo}/>
                })}
            </ul>
        </div>
    )
}

export default MyTodosContainer