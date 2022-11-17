import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="Header">
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">Exchange</h1>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
