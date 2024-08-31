import React, { useState } from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input' type='text' placeholder='What is you task' onChange={(e) => setValue(e.target.value)}></input>
            <button className='todo-btn' type='submit'>Add task</button>
        </form>
    )
}
