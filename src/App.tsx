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

  // кладем в useState наш массив тасок - initialTasks
  const [tasks, setTasks] = useState(initialTasks);

  // Удаляем таски при нажатии на кнопку - x
  function removeTask(id: number) {
    // фильтруем массив тасок - initialTasks, он же tasks
    let filteredTasks = tasks.filter(t => t.id !== id)
    // Присваиваем setTasks новый, отфильтрованный массив тасок - filteredTasks
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
