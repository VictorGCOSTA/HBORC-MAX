import React from 'react';
import './App.css';
import TodoForm from './components/taskForms';
import TodoList from './components/taskList';
import Todo from './components/task';


function App() {
  return (
    <div className="App">
      <h1>Lista </h1>
      <TodoList/>
      

    </div>
  );
}

export default App;
