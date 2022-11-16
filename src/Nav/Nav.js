import React from "react";
import "./Nav.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/">Main</a>
              </li>
              <li>
                <a href="/">Exchnge points</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
