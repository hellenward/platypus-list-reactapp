import React from "react";
import ToDoItem from "./todoitem.jsx";

const ToDoList = props => {
  return props.toDos.map(toDo => {
    return <ToDoItem toDo={toDo} />;
  });
};

export default ToDoList;
