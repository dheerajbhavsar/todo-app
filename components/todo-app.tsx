'use client'
import React, { useState } from 'react'
import TodoAdd from './todo-add';
import TodoList from './todo-list';

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);
  
  const handleAddTodo = (todo: string) => {
    setTodos([...todos, todo]);
    console.log('todo added', todo);
  }

  return (
    <div>
        <TodoAdd onAdd={handleAddTodo}/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default TodoApp