'use client';

import React from 'react'

const TodoList = ({todos}: {todos: string[]}) => {
  return (
    <div className='mt-2'>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList