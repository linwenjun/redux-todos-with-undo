import undoable, {distinctState} from 'redux-undo';

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
  }
};

const todos = (state=[], action)=> {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
        console.log(action);
      return state.map((t)=> (
          todo(t, action)
      ))
  }
  return state;
};

const undoableTodos = undoable(todos, {
  filter: distinctState()
});

export default undoableTodos;