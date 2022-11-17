import React from "react";

import "./Rate.css";

export default class Rate extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="Rate">
        <h3>Exchange Rate on November 20 2022</h3>
        <div className="flex-container">
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500</div>
            <div className="currency-out">1200</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">EUR</div>
            <div className="currency-in">1500</div>
            <div className="currency-out">1200</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">UA</div>
            <div className="currency-in">1500</div>
            <div className="currency-out">1200</div>
          </div>
        </div>
      </div>
    );
  }
}
