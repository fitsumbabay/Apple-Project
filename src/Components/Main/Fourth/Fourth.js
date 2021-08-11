import React, { Component } from "react";
import FourthPorps from "./FourthPorps";

class FourthHighLight extends Component {
  render() {
    return (
      <div>
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <FourthPorps
                  // sideWrapper="left-side-wrapper"
                  contaners="left-side-container"
                  tittleWrapper="iPhone 11"
                  description="  Just the right amount of everything."
                  price="From $18.70/mo. or $499 with trade‑in."
                  linkWrapper="Apply now"
                  black="black"
                />
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <FourthPorps
                  // sideWrapper="right-side-wrapper"
                  contaners="right-side-container"
                  tittleWrapper="Get the latest CDC response to COVID-19."
                  white="white"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default FourthHighLight;
