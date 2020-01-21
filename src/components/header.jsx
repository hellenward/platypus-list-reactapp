import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  state = {
    header: "Current List"
  };

  render() {
    return (
      <Navbar>
        <h1>{this.state.header}</h1>
      </Navbar>
    );
  }
}

export default Header;
