import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todos, onToggleTodo}) => {
  return (
      <ul>
        {todos.map((todo)=> (
            <Todo
              key={todo.id}
              {...todo}
              onClick={onToggleTodo}  
            />
        ))}
      </ul>
  )
};

export default TodoList;