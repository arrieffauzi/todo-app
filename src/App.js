import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
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

  const clearInput = () => {
    setData({
      id: "",
      title: "",
      description: "",
      status: "",
      createdAt: "",
    });
  };

  return (
    <div className="App">
      <div className="App-header mb-5">
        <div style={{ textAlign: "center" }}>
          <h2>Todo List App</h2>
        </div>
        <FormComponent
          data={data}
          setData={setData}
          button={true}
          clearInput={clearInput}
        />
      </div>
      <div className="todos-container">
          <TabsComponent
            complete={<TaskComponent todos={todos} status={1} />}
            incomplete={<TaskComponent todos={todos} status={0} />}
          />
      </div>
    </div>
  );
}

export default App;
