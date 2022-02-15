export const toDoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: action.payload };

    case "REMOVE_TODO":
      return { todos: action.payload };

    case "GET_TASK_LIST":
      return { todos: [...state.todos, ...action.payload.data] };

    case "EDIT_TODO":
      return { todos: action.payload };

    default:
      return state;
  }
};
