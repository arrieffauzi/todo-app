import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { EditTodoAction, RemoveTodoAction } from "../actions/toDoAction";
import FormComponent from "./FormComponent";

export const ModalComponent = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(RemoveTodoAction(props.editTask));
    props.closeModal();
  };
  const handleEdit = () => {
    dispatch(EditTodoAction(props.editTask));
    props.closeModal();
  };
  useEffect(() => {
    console.log("props", props);
    if (props.editTask) {
      if (props.editTask.status == 1) {
        setDisableButton(true);
      }
    }
  }, [props.editTask]);
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.closeModal} centered={true}>
        <ModalHeader toggle={props.closeModal}>Task Detail</ModalHeader>
        <ModalBody>
          <FormComponent data={props.editTask} setData={props.setData} />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button
            disabled={disableButton}
            color="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
