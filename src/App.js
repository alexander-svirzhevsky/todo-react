import React from 'react'
import ToDoList from './Todo/ToDoList'

function App() {

  const todo = [
    { id: 1, completed: false, task: 'купить хлеб' },
    { id: 2, completed: false, task: 'купить молоко' },
    { id: 3, completed: false, task: 'купить сыр' }
  ]

  function toggleToDo(id) {
    console.log(id);

  }

  return (
    <div className='wrapper'>
      <h1>React app</h1>
      <ToDoList todoList={todo} onToggle={toggleToDo}></ToDoList>
    </div>
  );
}

export default App;
