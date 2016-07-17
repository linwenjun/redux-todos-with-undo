import React from 'react';

const Todo = ({text, id, onClick, completed})=> {

  return (
      <li
        onClick={
          ()=> {
            onClick(id);
          }
        }
        style={{
          textDecoration: completed ? 'line-through': 'none'
        }}
      >{text}</li>
  )
};

export default Todo;