import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";
// Создали тип, который описывает todolist
type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

function App() {
  // Удаляем таски при нажатии на кнопку - x
  function removeTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let filteredTasks = tasks.filter(t => t.id !== id);
    tasksObj[todolistId] = filteredTasks;

    setTasks({ ...tasksObj });
  }

  // Добавляем таски
  function addTask(title: string, todolistId: string) {
    let task = { id: v1(), title: title, isDone: false };
    let tasks = tasksObj[todolistId];
    let newTasks = [task, ...tasks];
    tasksObj[todolistId] = newTasks;

    setTasks({ ...tasksObj });
  }

  // Меняем статус при нажатии на checkbox (true, false)
  function changeStatus(id: string, isDone: boolean, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find(t => t.id === id);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasksObj });
    }
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

  // Создали список тасок
  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "active" },
    { id: todolistId2, title: "What to buy", filter: "completed" }
  ]);

  let removeTodolist = (todolistId: string) => {
    let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
    setTodolists(filteredTodolist);
    delete tasksObj[todolistId];
    setTasks({...tasksObj});
  };

  // Создали массив тасок
  let [tasksObj, setTasks] = useState({
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
        // Отрисовываем все таски. Пробегаемся по ним функцией .map()
        todolists.map((tl) => {

          // делаем фильрацию по таскам
          let tasksForTodolist = tasksObj[tl.id];

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
            removeTodolist={removeTodolist}
          />
        })
      }
    </div>
  );
}

export default App;