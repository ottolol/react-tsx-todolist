import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";

function App() {

  // кладем в useState наш массив тасок
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "CSS@HTML", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false }
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  // Удаляем таски при нажатии на кнопку - x
  function removeTask(id: string) {
    // фильтруем массив тасок tasks
    let filteredTasks = tasks.filter(t => t.id !== id)
    // Присваиваем setTasks новый, отфильтрованный массив тасок - filteredTasks
    setTasks(filteredTasks)
  }

  // Добавляем таски
  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }
  
  // Меняем статус при нажатии на checkbox (true, false)
  function changeStatus(id: string, isDone: boolean) {
    let task = tasks.find(t => t.id === id);
    if (task) {
      task.isDone = isDone;
    }
    // создаем копию массива, чтобы реакт понял, что мы что-то поменяли в массиве
    // без такого подхода - деструктуризации массива, реакт не будет отрисовывать изменения
    setTasks([...tasks]);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
