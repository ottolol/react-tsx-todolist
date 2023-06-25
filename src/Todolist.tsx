import React from 'react';
import './App.css';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export default function Todolist(props: PropsType) {
    return (
        <div className='todolist'>
            <h3>{props.title}</h3>
            <input /><button>+</button>
            <ul>
                {
                    props.tasks.map(t =>
                        <li>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={
                                () => {
                                    props.removeTask(t.id)
                                }
                            }>x</button>
                        </li>
                    )
                }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
        </div>
    )
}