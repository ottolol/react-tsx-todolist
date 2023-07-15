import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const [error, setError] = useState<string | null>(null);

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value);
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // убираем надпись с ошибкой при вводе в инпут
        setError(null);

        if (e.ctrlKey && e.charCode === 13) {
            props.addTask(newTaskTitle, props.id);
            setNewTaskTitle("");
        }
    };
    const addTask = () => {
        // условие - если строка не пустая, добавляем таску
        if (newTaskTitle.trim() !== "") {
            // добавляем новую таску
            props.addTask(newTaskTitle.trim(), props.id);
            // очищаем input, после добавления новой таски
            setNewTaskTitle("");
        } else {
            setError("Title is required");
        }
    };
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    return (
        <div className="todolist">
            <h3>{props.title} <button onClick={removeTodolist}>x</button></h3>
            <div>
                <input value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {
                    // вывели все li'шки из массива тасок [task1], [task2] и т.д.
                    props.tasks.map(t => {
                        const onRemoveHandler = () => props.removeTask(t.id, props.id);
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, e.currentTarget.checked, props.id);
                        };

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input type="checkbox" checked={t.isDone}
                                onChange={onChangeHandler}
                            />
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    }

                    )
                }
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}