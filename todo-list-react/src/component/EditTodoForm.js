import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input' type='text' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}></input>
            <button className='todo-btn' type='submit'>Update Task</button>
        </form>
    )
}
