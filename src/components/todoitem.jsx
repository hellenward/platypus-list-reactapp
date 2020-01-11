import React from "react";

const Checkbox = props => <input type="checkbox" {...props} />;

class ToDoItem extends React.Component {
  state = { checked: false };

  handleCheckBoxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div>
        <label className="checkbox">
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
