import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let tasks1: Array<TaskType> = [
    { id: 1, title: "CSS@HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false }
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Avatar", isDone: true },
    { id: 3, title: "Spider Man", isDone: true },
    { id: 4, title: "XXX", isDone: false }
  ]

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasks1}
      />
      <Todolist
        title="Movies"
        tasks={tasks2}
      />
    </div>
  );
}

export default App;
