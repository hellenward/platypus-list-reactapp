import React from "react";
import ToDoItem from "./todoitem.jsx";
import { Col } from "react-bootstrap";

const ToDoList = props => {
  return (
    <Col xs="3">
      {props.toDos.map((toDo, key) => {
        return <ToDoItem toDo={toDo} key={key} />;
      })}
    </Col>
  );
};

export default ToDoList;
