import React from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { PropsType } from './Todolist';

function App() {

  let task1: PropsType = [
    { id: 1, title: "CSS@HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]

  let task2: PropsType = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Avatar", isDone: true },
    { id: 3, title: "Transformers", isDone: true },
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
