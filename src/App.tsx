import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let task1: Array<TaskType> = [
    { id: 1, title: "CSS@HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]

  let task2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Avatar", isDone: true },
    { id: 3, title: "Transformers", isDone: true },
    { id: 4, title: "Unknown film", isDone: false },
  ]

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Todolist title="What to learn" tasks={task1} />
      <Todolist title="Movies" tasks={task2} />
      {/* </header> */}
    </div>
  );
}

export default App;
