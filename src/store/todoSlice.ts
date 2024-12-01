import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state and type
interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

// Create the slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ text: string }>) {
      const newTodo = {
        id: new Date().toISOString(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    removeTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Export the actions for dispatching
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;
