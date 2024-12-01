import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp: React.FC = () => (
  <div>
    <TodoInput />
    <TodoList />
  </div>
);

export default TodoApp;
