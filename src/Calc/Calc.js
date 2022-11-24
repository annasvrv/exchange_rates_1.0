import React from "react";
import "./Calc.css";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    // console.log(elements);
    // console.log(elements["amount"]);
    // console.log(elements.amount.value);
    // console.log(elements.currency.value);
    let amount = elements.amount.value;
    let currency = elements.currency.value;
    this.setState({ result: (amount / this.state.rate[currency]).toFixed(2) });
  };

  render() {
    return (
      <div className="Calc">
        <h3> Calculator </h3>
        <div className="block">
          <div>I want to:</div>
          {/* <div>
            <label>
              <input type="radio" name="radio" defaultValue="0" />
              Buy
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="radio" defaultValue="1" />
              Sell
            </label>
          </div> */}

          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="100" name="amount" />
              <select name="currency" id="">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option value={keyName} key={i}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>

          <div>
            <h4>Result</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
