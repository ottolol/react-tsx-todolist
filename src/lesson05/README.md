# Урок №5 - Улучшаем компонент

## Создали массив тасок
```
let [tasksObj, setTasks] = useState({[todolistId1]: [], [todolistId2]: []})
```

## Создали список тасок
```
let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "active" },
    { id: todolistId2, title: "What to buy", filter: "completed" }
]);
```

## Отрисовываем все таски. Пробегаемся по ним функцией .map()
```
todolists.map((tl) => {
    return <Todolist/>
}
```

## Создали тип, который описывает todolist. И присвоили его списоку тасок
```
type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}
```

## Перенесли фильрацию по таскам в todolists.map((tl) => {}
Чтобы фильтрация работала на каждой таске

https://www.youtube.com/watch?v=LW2H3kb0HDI&list=PLcvhF2Wqh7DOFHUukzl5g4BP_Bbn6oM00&index=10
продолжаем с 25:44