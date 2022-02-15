import axios from "axios";

export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  console.log("todo", todos);

  dispatch({
    type: "ADD_TODO",
    payload: [...todos, todo],
  });

  // const hasTodo=todos.find(item=>item.todo === todo)
  // if(!hasTodo && todo !== ""){
  //     dispatch({
  //         type:"ADD_TODO",
  //         payload:[{todo}, ...todos]
  //     })
  // }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const deltedItem = todos.find((el)=>el.id == todo.id)
  console.log('deltedItem',deltedItem)
  if (deltedItem) {
    dispatch({
      type: "REMOVE_TODO",
      payload: todos.filter((el) => el.id !== todo.id),
    });
  }
};

export const EditTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const index = todos.findIndex((el)=>el.id == todo.id)
  console.log('index',index)
  if (index > -1) {
    todos[index] = todo
    dispatch({
      type: "EDIT_TODO",
      payload: todos,
    });
  }
};

export const getTaskList = () => {
  return (dispatch) => {
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then(function (response) {
        // handle Success
        dispatch({
          type: "GET_TASK_LIST",
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: "GET_TASK_LIST",
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};
