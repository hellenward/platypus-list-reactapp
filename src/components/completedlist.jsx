import React from "react";
import ToDoItem from "./todoitem.jsx";

const CompletedList = props => {
  return (
    <div className="completedList">
      <h3 className="completedHeader">Completed Items</h3>
      <div className="completedItem">
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
};

export default CompletedList;
