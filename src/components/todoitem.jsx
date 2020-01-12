import React from "react";
const data = require("../data.json");

const Checkbox = props => <input type="checkbox" {...props} />;

class ToDoItem extends React.Component {
  state = { checked: false };

  handleCheckBoxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckBoxChange}
          />
          <span>To Do Item</span>
        </label>
      </div>
    );
  }
}

export default ToDoItem;
