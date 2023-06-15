import React from "react";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export type PropsType = {
    title: string,
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true} /><span>CSS@HTML</span></li>
                <li><input type="checkbox" checked={true} /><span>JS</span></li>
                <li><input type="checkbox" checked={false} /><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}