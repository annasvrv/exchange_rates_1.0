import React from "react";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main"></main>
        <Footer />
      </div>
    );
  }
}

export default App;
