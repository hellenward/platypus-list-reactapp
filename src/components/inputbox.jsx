import React from "react";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Submitted thing was submitted: " + this.state.value);
    event.preventDefalut();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter text here :
          <input
            type="text"
            name="todo"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default InputBox;
