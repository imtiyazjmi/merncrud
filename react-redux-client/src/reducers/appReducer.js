// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddTodo: false,
  showAddCompany: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TODO':
      return {
        ...currentState, showAddTodo: !currentState.showAddTodo
      }
    case 'TOGGLE_ADD_COMPANY':
      return {
        ...currentState, showAddCompany: !currentState.showAddCompany
      }
      
    default:
      return currentState;

  }
}

export default appReducer;
