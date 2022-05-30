import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import NewTaskForm from './components/NewTaskForm';
import MyTodosContainer from './components/MyTodosContainer';

/* 
What's the first thing that I might need to do here to
create a new task?

1. Collect user imput
2. Listen for a submit
  a. Create a new task component
  b. Use the power of state to trigger a re-render 
  when a new task object is added to our todos array.

Where does it make sense to store the state for our app?
  - Start in the app

*/

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(todo){
    const newTodosArr = [...todos, {description: todo, id: todos.length + 1}]
    setTodos(newTodosArr)
  }

  function handleDeleteTodo(todo){
    const newTodos = todos.filter(task => {
      return task.id !== todo.id
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <Title />
      <NewTaskForm 
        handleAddTodo={handleAddTodo}
      />
      <MyTodosContainer 
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;



