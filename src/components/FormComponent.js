import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Label } from "reactstrap";
import { AddTodoAction } from "../actions/toDoAction";

export default function FormComponent(props) {
  const dispatch = useDispatch();
  const createTask = async (value) => {
    await dispatch(AddTodoAction(value));
    props.setData("");
    console.log("data", props);
  };

  return (
    <div>
      <form>
        <input
          className="inputText"
          placeholder="ID"
          value={props.data.id}
          onChange={(e) => props.setData({ ...props.data, id: e.target.value })}
        />

        <input
          className="inputText"
          placeholder="Title"
          value={props.data.title}
          onChange={(e) =>
            props.setData({ ...props.data, title: e.target.value })
          }
        />

        <input
          style={{ display: "inherit" }}
          className="inputText"
          placeholder="Description"
          value={props.data.description}
          onChange={(e) =>
            props.setData({ ...props.data, description: e.target.value })
          }
        />

        <input
          style={{ display: "inherit" }}
          className="inputText"
          placeholder="status"
          type={"number"}
          value={props.data.status}
          onChange={(e) =>
            props.setData({ ...props.data, status: parseInt(e.target.value) })
          }
        />

        <input
          style={{ display: "inherit" }}
          className="inputText"
          placeholder="Created Date"
          value={props.data.createdAt}
          onChange={(e) =>
            props.setData({ ...props.data, createdAt: e.target.value })
          }
        />

        {/* <button type="submit" className="buttonHome">
          Add
        </button> */}
      </form>
      {props.button ? (
        <Button
          onClick={() => {
            createTask(props.data);
            props.setData({
              data: {
                id: "",
                title: "",
                description: "",
                status: undefined,
                createdAt: "",
              },
            });
          }}
          color="secondary"
        >
          Create
        </Button>
      ) : null}
    </div>
  );
}
