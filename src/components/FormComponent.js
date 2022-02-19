import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { AddTodoAction } from "../actions/toDoAction";

export default function FormComponent(props) {
  const dispatch = useDispatch();
  const createTask = async (value) => {
    // await dispatch(AddTodoAction(value));
    // props.setData("");
    console.log("data", value);
    // props.clearInput();
  };

  return (
    <div>
      {/* <input
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
        /> */}

      {/* <input
          style={{ display: "inherit" }}
          className="inputText"
          placeholder="status"
          type={"number"}
          value={props.data.status}
          onChange={(e) =>
            props.setData({ ...props.data, status: parseInt(e.target.value) })
          }
        /> */}

      {/* <input
          style={{ display: "inherit" }}
          className="inputText"
          placeholder="Created Date"
          value={props.data.createdAt}
          onChange={(e) =>
            props.setData({ ...props.data, createdAt: e.target.value })
          }
        /> */}

      <Container>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">ID</Label>
            <Input
              placeholder="ID"
              value={props.data.id}
              onChange={(e) =>
                props.setData({ ...props.data, id: e.target.value })
              }
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              placeholder="Title"
              value={props.data.title}
              onChange={(e) =>
                props.setData({ ...props.data, title: e.target.value })
              }
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Description</Label>
            <Input
              placeholder="Description"
              value={props.data.title}
              value={props.data.description}
              onChange={(e) =>
                props.setData({ ...props.data, description: e.target.value })
              }
              type="textarea"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              placeholder="Status"
              defaultValue={null}
              onChange={(e) =>
                props.setData({ ...props.data, status: e.target.value })
              }
            >
              <option value="" hidden></option>
              <option value={0}>0</option>
              <option value={1}>1</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Create Date</Label>
            <Input
              id="exampleDate"
              name="date"
              placeholder="date placeholder"
              type="date"
              value={props.data.createdAt}
              onChange={(e) =>
                props.setData({ ...props.data, createdAt: e.target.value })
              }
            />
          </FormGroup>

          {props.button ? (
            <Container style={{textAlign:"center"}}>
              <Button
                onClick={() => {
                  createTask(props.data);
                }}
                color="secondary"
              >
                Create
              </Button>
            </Container>
          ) : null}
        </Form>
      </Container>
    </div>
  );
}
