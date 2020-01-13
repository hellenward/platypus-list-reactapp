import React from "react";
import { Row, Col } from "react-bootstrap";

const Checkbox = props => <input type="checkbox" {...props} />;

class ToDoItem extends React.Component {
  state = { checked: false };

  handleCheckBoxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <Row>
        <Col>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckBoxChange}
            />
            <span>{this.props.toDo.task}</span>
          </label>
        </Col>
      </Row>
    );
  }
}

export default ToDoItem;
