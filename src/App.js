import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <main>
            <Router>
              <Routes>
                <Route exact path="/" element={<Rate />} />
                <Route exact path="/About" element={<About />} />
              </Routes>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              This website uses cookies. We use cookies to personalise content
              and ads, to provide social media features and to analyse our
              traffic. <br />
              We also share information about your use of our site with our
              social media, advertising and analytics partners who may combine
              it <br />
              with other information that you have provided to them or that they
              have collected from your use of their services. &nbsp; <br />
              <button className="btn btn-primary btm-sm">OK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
