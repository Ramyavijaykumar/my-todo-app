
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { removeTodo } from '../store/todoSlice';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this TODO?')) {
      dispatch(removeTodo({ id }));
    }
  };

  if (todos.length === 0) {
    return <p>No TODOs yet! Add some to get started.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
