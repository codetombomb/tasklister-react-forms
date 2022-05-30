import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import NewTaskForm from './components/NewTaskForm';
import MyTodosContainer from './components/MyTodosContainer';

function App() {


  return (
    <div className="App">
      <Title />
      <NewTaskForm />
      <MyTodosContainer />
    </div>
  );
}

export default App;



