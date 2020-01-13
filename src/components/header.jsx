import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  state = {
    header: "Current List"
  };

  handleClick = () => {
    alert("You clicked me!");
  };

  render() {
    return (
      <Navbar bg="light">
        <h1>{this.state.header}</h1>
        <button type="submit" onClick={this.handleClick}>
          Share
        </button>
      </Navbar>
    );
  }
}

export default Header;
