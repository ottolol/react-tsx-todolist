import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let initialTasks: Array<TaskType> = [
    { id: 1, title: "CSS@HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]

  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)

    //обычная запись как в JS - if, else в скобках
    // let resultTasks = tasks.filter((t) => {
    //   if (t.id !== id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
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
