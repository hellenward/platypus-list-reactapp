import React from "react";

const Checkbox = (props) => <input type="checkbox" {...props} />;

const toDoItem = (props) => {
  return (
    <div>
      <label>
        <Checkbox
          checked={props.toDo.Completed}
          onChange={console.log("clicked")}
        />
        <span>{props.toDo.task}</span>
      </label>
    </div>
  );
};

export default toDoItem;
