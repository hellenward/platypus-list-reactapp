import React, { Component } from "react";

class Header extends Component {
  state = {
    header: "Current List"
  };

  handleClick = () => {
    alert("You clicked me!");
  };

  render() {
    return (
      <div>
        <h1 className="header">{this.state.header}</h1>
        <button
          className="shareButton"
          type="submit"
          onClick={this.handleClick}
        >
          Share
        </button>
      </div>
    );
  }
}

export default Header;
