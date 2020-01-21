import React from "react";
import ToDoItem from "./todoitem.jsx";
import { Col } from "react-bootstrap";

const ToDoList = props => {
  return (
    <div>
      {props.toDos.map((toDo, key) => {
        return <ToDoItem toDo={toDo} key={key} />;
      })}
    </div>
  );
};

export default ToDoList;
