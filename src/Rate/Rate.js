import React, { useState } from "react";
import axios from "axios";
import Calc from "../Calc/Calc";
import "./Rate.css";

export default function Rate() {
  let currency = ["USD", "GBP", "UAH", "CAD"];
  let [currencyRate, setCurrencyRate] = useState({});
  let [date, setDate] = useState(" ");

  let apiUrl = `https://api.exchangerate.host/latest?/`;
  axios.get(apiUrl).then(showRates);

  function showRates(response) {
    // console.log(response.data);
    // console.log(response.data.rates);
    // console.log(response.data.base);
    setDate(response.data.date);

    let result = currencyRate;
    for (let i = 0; i < currency.length; i++) {
      result[currency[i]] = response.data.rates[currency[i]];
    }
    setCurrencyRate(result);
    // console.log(currencyRate);
  }

  return (
    <div className="Rate">
      <h3>EUR Exchange Rate on {date}</h3>
      <div className="flex-container">
        {Object.keys(currencyRate).map((currency, index) => {
          return (
            <div className="block flex-item" key={index}>
              <div className="currency-name">{currency}</div>
              <div className="currency-in">
                {currencyRate[currency].toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
      <Calc rate={currencyRate} />
    </div>
  );
}
