import React from 'react'
import ToDoList from './Todo/ToDoList'

function App() {

  const todo = [
    { id: 1, completed: false, task: 'купить хлеб' },
    { id: 2, completed: false, task: 'купить молоко' },
    { id: 3, completed: false, task: 'купить сыр' }
  ]

  return (
    <div className='wrapper'>
      <h1>React app</h1>
      <ToDoList todoList={todo}></ToDoList>
    </div>
  );
}

export default App;
