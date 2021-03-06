const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      const deleteTodos = state.data.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        data: deleteTodos,
      };
    case "EDIT_TODO":
      let newValue = state.data.map((todo)=> (todo.id === action.id ? action: todo))
      return {
        ...state,
        data: newValue,
      };
    default:
      return state;
  }
};
export default todos;
