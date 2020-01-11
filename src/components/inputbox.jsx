import React from "react";

const InputBox = () => {
  return (
    <p>
      <input
        className="inputText"
        type="text"
        name="todo"
        value="Add something to your list..."
      ></input>
    </p>
  );
};

export default InputBox;
