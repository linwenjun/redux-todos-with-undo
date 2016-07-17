import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import {toggleTodo} from '../actions';

const mapStateToProps = (state) => ({
  todos: state.todos.present
});

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id)=> {
      dispatch(toggleTodo(id));
    }
  }
};
  
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;