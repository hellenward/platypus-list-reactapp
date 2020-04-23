import React from "react";

const inputBox = (props) => {
  const textInBox = () => {
    let text = event.target.value;
    props.handleChange(text);
  };

  return (
    <div>
      <form addItem={props.addItem}>
        <label>
          Enter text here:
          <input
            type="text"
            name="todo"
            value={props.value}
            onChange={this.textInBox}
          ></input>
        </label>
      </form>
    </div>
  );
};

export default inputBox;
