import React from "react";
import "./App.css";

import Header from "./Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main"></main>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
