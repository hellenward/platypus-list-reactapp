import React from "react";
import ToDoItem from "./todoitem.jsx";

const ToDoList = props => {
  return (
    <div className="checkbox">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default ToDoList;
