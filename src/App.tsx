import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";
type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

function App() {
  // Удаляем таски при нажатии на кнопку - x
  function removeTask(id: string, todolistId: string) {
    let task = tasks[todolistId];
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

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "active" },
    { id: todolistId2, title: "What to buy", filter: "completed" }
  ]);

  let [tasks, setTasks] = useState({
    [todolistId1]: [
      { id: v1(), title: "CSS@HTML", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "React", isDone: false },
      { id: v1(), title: "Redux", isDone: false }
    ],
    [todolistId2]: [
      { id: v1(), title: "Book", isDone: false },
      { id: v1(), title: "Milk", isDone: true },
    ]
  });

  return (
    <div className="App">
      {
        todolists.map((tl) => {

          // делаем фильрацию по таскам
          let tasksForTodolist = tasks[tl.id];

          if (tl.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
          }
          if (tl.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
          }

          return <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            filter={tl.filter}
          />
        })
      }
    </div>
  );
}

export default App;
