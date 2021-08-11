import React, { Component } from "react";
import FirstHighlight from "./ComenPropSecoThree/FirstHighlight";
import SecondHighlight from "./ComenPropSecoThree/SecondHighlight";
import ThirdHighlight from "./ComenPropSecoThree/ThirdHighlight";
import Fifthprops from "./Fifth/Fifthprops";
import arcade from "./images/icons/arcade.png";
import watchLogo from "./images/icons/watch-series5-logo.png";
import appleTvImg from "./images/icons/apple-tv-logo.png";
import BankerImg from "./images/home/banker.png";
import Rating from "../Rating/Rating";
import FourthPorps from "./Fourth/FourthPorps";
import FourthHighLight from "./Fourth/Fourth";
import Youtube from "../Youtube/Youtube";

class Main extends Component {
  render() {
    return (
      <div>
        {/* <!-- Alert Section --> */}
        <section className="alert-section top-50">
          <div className="container">
            <div className="alert-title">We’re open for you.</div>
            <div className="alert-text">
              Our retail stores are closed, but you can buy our products here
              online and get fast, free delivery. If you need help finding the
              right product or have a question on your order, chat online with a
              Specialist or call 1-800-MY-APPLE.
              <br />
              For service and support, visit{" "}
              <a href="https://support.apple.com/">support.apple.com</a>.
            </div>
          </div>
        </section>
        {/* <!-- First section starts here -->*/}
        <FirstHighlight />
        {/* <!-- First section starts here --> */}
        <SecondHighlight />
        {/* <!-- Second section starts here -->  */}
        {/* <!-- Third section starts here -->  */}
        <ThirdHighlight />
        {/* <!-- Third section ends here -->
	<      !-- Fourth section starts here --> */}
        <FourthHighLight />
        {/* <!-- Fourth section ends here -->

	<!-- Fifth section starts here --> */}
        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div class="left-side-container">
                  <div class="top-logo-wrapper">
                    <div class="logo-wrapper">
                      <img src={appleTvImg} />
                    </div>
                  </div>
                  <div class="tvshow-logo-wraper">
                    <img src={BankerImg} />
                  </div>
                  <div class="watch-more-wrapper">
                    <a href="#">Watch now on the Apple TV App</a>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <Fifthprops
                  sideWrapper="right-side-wrapper"
                  contaner="right-side-container"
                  imgName={watchLogo}
                  description=" With the Always-On Retina display.
                  You’ve never seen a watch like this."
                  linkName="Learn More"
                  linkName2="Buy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Fifth section ends here --> */}
        {/* <!-- Sixth section starts here --> */}
        <section className="sixth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <Fifthprops
                  sideWrapper="left-side-wrapper"
                  contaner="left-side-container"
                  imgName={arcade}
                  description="Agent 8 is a small hero on a big mission."
                  white="white"
                  linkName="Play now"
                  supper="2"
                  linkName2="Learn about Apple Arcade"
                />
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper">
                    Apple Card Monthly Installments
                  </div>
                  <Fifthprops
                    description="Pay for your next iPhone over time, interest-free with Apple
                Card.
              "
                    linkName="Learn more"
                    linkName2="Apply now"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Sixth section ends here --// */}
        <Rating />
        <Youtube />
      </div>
    );
  }
}
export default Main;
