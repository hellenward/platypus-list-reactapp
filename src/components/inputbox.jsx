import React from "react";
import { Col } from "react-bootstrap";

const InputBox = () => {
  return (
    <Col xs="3">
      <input
        type="text"
        name="todo"
        value="Add something to your list..."
      ></input>
    </Col>
  );
};

export default InputBox;
