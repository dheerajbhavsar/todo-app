'use client';
import React, { useRef } from "react";

interface Props{
  onAdd: (todo: string) => void;
}

const TodoAdd = ({onAdd: onAdd}: Props) => {
  const todoRef = useRef(null);

  return (
    <div>
      <form action={() => onAdd(todoRef.current?.value)}>
        <div className="flex flex-row justify-between border border-gray-400 mt-2 p-3">
          <input
            ref={todoRef}
            name='todo'
            type='text'
            placeholder='add your todo here.' className="border-none p-2"
          />
          <button type='submit' className="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoAdd;
