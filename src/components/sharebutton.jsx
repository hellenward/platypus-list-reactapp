import React from "react";
import { Component } from "react";

class Sharebutton extends React.Component {
  handleClick = () => {
    alert("You clicked me!");
  };

  render() {
    return (
      <button className="buttonClick" type="submit" onClick={this.handleClick}>
        Share
      </button>
    );
  }
}

export default Sharebutton;
