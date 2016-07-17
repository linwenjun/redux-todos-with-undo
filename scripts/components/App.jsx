import React from 'react';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';
import UndoRedo from '../containers/UndoRedo.jsx';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <UndoRedo />
  </div> 
);

export default App