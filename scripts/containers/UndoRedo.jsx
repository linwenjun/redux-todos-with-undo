import React from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
      <button disabled={!canUndo} onClick={onUndo}>
        Undo
      </button>
      {'  '}
      <button disabled={!canRedo} onClick={onRedo}>
        Redo
      </button>
    </p>
);

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: ()=> dispatch(UndoActionCreators.undo()),
    onRedo: ()=> dispatch(UndoActionCreators.redo())
  }
};

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export default UndoRedo;
