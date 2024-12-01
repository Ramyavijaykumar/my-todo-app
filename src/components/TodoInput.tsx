
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { addTodo } from '../store/todoSlice';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    if (!inputValue.trim()) {
      alert('TODO cannot be empty!');
      return;
    }
    if (todos.some((todo) => todo.text === inputValue.trim())) {
      alert('TODO already exists!');
      return;
    }
    dispatch(addTodo({ text: inputValue.trim() }));
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a TODO"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
