import React, { useState } from "react";
import { ModalComponent } from "./ModalComponent";

export default function TaskComponent(props) {
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState();

  const toggle = (item) => {
    const task = props.todos.find((i) => i.id == item.id);
    console.log("task", task);
    setEditTask(task);
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {props.status !== 0 ? (
        <ul className="asllTodos">
          {props.todos &&
            props.todos
              .filter((el) => el.status !== 0)
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((filteredItem) => (
                <li key={filteredItem.id} className="singleTodo">
                  <span className="todoText">{filteredItem.title}</span>
                  <button
                    style={{
                      borderRadius: 25,
                      padding: 10,
                      border: "1px solid white",
                      backgroundColor: "lightgrey",
                    }}
                    onClick={() => toggle(filteredItem)}
                  >
                    To Do
                  </button>
                  <ModalComponent
                    modal={modal}
                    toggle={toggle}
                    editTask={editTask}
                    setData={setEditTask}
                    closeModal={closeModal}
                  />
                </li>
              ))}
        </ul>
      ) : (
        <ul className="asllTodos">
          {props.todos &&
            props.todos
              .filter((el) => el.status == 0)
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((filteredItem) => (
                <li key={filteredItem.id} className="singleTodo">
                  <span className="todoText">{filteredItem.title}</span>
                  <button
                    style={{
                      borderRadius: 25,
                      padding: 10,
                      border: "1px solid white",
                      backgroundColor: "lightgray",
                    }}
                    onClick={() => toggle(filteredItem)}
                  >
                    To Do
                  </button>
                  <ModalComponent
                    modal={modal}
                    toggle={toggle}
                    editTask={editTask}
                    setData={setEditTask}
                    closeModal={closeModal}
                  />
                </li>
              ))}
        </ul>
      )}
    </div>
  );
}
