import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [newTaskTitle, setNewTaskTitle] = useState("");
    let [error, setError] = useState<string | null>(null);
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // убираем надпись с ошибкой при вводе в инпут
        setError(null);

        if (e.ctrlKey && e.charCode === 13) {
            props.addItem(newTaskTitle);
            setNewTaskTitle("");
        }
    };
    const addTask = () => {
        // условие - если строка не пустая, добавляем таску
        if (newTaskTitle.trim() !== "") {
            // добавляем новую таску
            props.addItem(newTaskTitle.trim());
            // очищаем input, после добавления новой таски
            setNewTaskTitle("");
        } else {
            setError("Title is required");
        }
    };

    return <div>
        <input value={newTaskTitle}
            onChange={onNewTitleChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? "error" : ""} />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
    </div>;
}
