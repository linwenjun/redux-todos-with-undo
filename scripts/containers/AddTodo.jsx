import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch}) => {
  let input;
  return (
      <div>
        <input type="text" ref={node => {
          input = node
        }}/>
        <input type="button" value="Add"
               onClick={e => {
                 e.preventDefault();
                 let text = input.value.trim()
                 if(!text) return;
                 dispatch(addTodo(text));
               }}/>
      </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;