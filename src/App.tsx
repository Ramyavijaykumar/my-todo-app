import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoApp from './components/TodoApp';
import './styles.css';

const App: React.FC = () => (
  <Provider store={store}>
    <h1>TODO List</h1>
    <TodoApp />
  </Provider>
);

export default App;
