import React from "react";
import "./Footer.css";
import logo from "./paypal_logo.jpg";

export default class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <footer id="footer" className="Footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">
                  <a href="/">2022 &copy; Coded by AnnaS</a>
                </h1>
                <p>All Rights Reseved</p>
              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/" tooltip="Sitemap">
                        Sitemap
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_blank"
                        rel="no refferer"
                        tooltip="Google Sitemap"
                      >
                        Google Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/" tooltip="Contacs">
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a href="/" tooltip="Support">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/" tooltip="License">
                        License
                      </a>
                    </li>
                    <li>
                      <a href="/" tooltip="Privacy Policy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" tooltip="Terms of Service">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link"></ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-method">
                <ul>
                  <img
                    src={logo}
                    alt=""
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="www.paypal.com"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
