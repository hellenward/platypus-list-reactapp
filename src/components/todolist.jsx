import React from "react";
import ToDoItem from "./todoitem.jsx";

const ToDoList = (props) => {
  return (
    <div>
      {props.toDos.map((toDo, key) => {
        return <ToDoItem toDo={toDo} key={key} />;
      })}
    </div>
  );
};

export default ToDoList;
