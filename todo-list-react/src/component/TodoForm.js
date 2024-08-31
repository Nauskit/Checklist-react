import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        if (value == "") {
            alert("Input your task")
        } else {
            e.preventDefault();
            addTodo(value)
        }
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input' type='text' placeholder='What is you task' onChange={(e) => setValue(e.target.value)}></input>
            <button className='todo-btn' type='submit'>Add task</button>
        </form>
    )
}
