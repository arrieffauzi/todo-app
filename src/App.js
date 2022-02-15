import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskList } from "./actions/toDoAction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { TabsComponent } from "./components/tabsComponent";
import TaskComponent from "./components/taskComponent";
import store from "./store";

function App() {
  const Todo = useSelector((state) => state.Todo);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { todos } = Todo;
  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // dispatch(AddTodoAction(todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App</h2>
        <FormComponent data={data} setData={setData} button={true} />

        <div className="mt-5">
          <TabsComponent
            complete={<TaskComponent todos={todos} status={1} />}
            incomplete={<TaskComponent todos={todos} status={0} />}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
