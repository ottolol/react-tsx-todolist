import React, { useState } from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {

  let [tasks, setTasks] = useState(
    [
      { id: 1, title: "CSS@HTML", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "React", isDone: false },
      { id: 4, title: "TypeScript", isDone: false },
    ]
  );

  // let [filter, setFilter] = useState("all");

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;