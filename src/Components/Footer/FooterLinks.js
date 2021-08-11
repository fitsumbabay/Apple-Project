import React, { Component } from "react";
import FooterProps from "./FooterProps";
import FooterIMG from "../Main/images/icons/16.png";
class FooterLinks extends Component {
  render() {
    return (
      <div>
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              <p>
                1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                promotional pricing is after trade‑in of iPhone 8 Plus and
                iPhone X in good condition. Additional trade‑in values require
                purchase of a new iPhone, subject to availability and limits.
                Must be at least 18. Apple or its trade-in partners reserve the
                right to refuse or limit any Trade In transaction for any
                reason. In‑store trade‑in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). Sales tax may be assessed on full value of new
                iPhone. Additional terms from Apple or Apple’s trade-in partners
                may apply. Monthly pricing: Available to qualified customers and
                requires 0% APR, 24-month installment loan with Citizens One or
                Apple Card Monthly Installments and iPhone activation with AT&T,
                Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                Additional Apple Card Monthly Installments terms are in the
                <a
                  href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                  target="_blank"
                >
                  Customer Agreement
                </a>
                . Additional iPhone Payments terms are
                <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                  here
                </a>
                .
              </p>
              <p>
                2. Subscription required.
                <br />
                <br />
                Magic Keyboard sold separately.
                <br />
                <br />
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other{" "}
                <a href="https://www.apple.com/promo/">terms </a> apply.
              </p>
            </div>
            <div className="footer-links-wrapper row">
              <div className="links-wrapper-1 col-sm-12 col-md">
                <h3>Shop and Learn</h3>
                <ul>
                  <FooterProps linksName="Mac" />
                  <FooterProps linksName="ipad" />
                  <FooterProps linksName="iphone" />
                  <FooterProps linksName="watch" />
                  <FooterProps linksName="tv" />
                  <FooterProps linksName="music" />
                  <FooterProps linksName="AirPads" />
                  <FooterProps linksName="HomePode" />
                  <FooterProps linksName="ipad touch" />
                </ul>
              </div>
              <div className="links-wrapper-2 col-sm-12 col-md">
                <h3>Services</h3>
                <ul>
                  <FooterProps linksName="Apple Music" />
                  <FooterProps linksName="Apple News+" />
                  <FooterProps linksName="Apple TV+" />
                  <FooterProps
                    linksName="Apple
                Arcade"
                  />
                  <FooterProps linksName="Apple Card" />
                  <FooterProps linksName="iCloud" />
                  <FooterProps linksName="Gift Cards" />
                  <h3>Account</h3>
                  <FooterProps
                    linksName="Manage
                Your Apple ID"
                  />
                  <FooterProps linksName="Apple Store Account" />
                  <FooterProps linksName="iCloud.com" />
                </ul>
              </div>
              <div className="links-wrapper-3 col-sm-12 col-md">
                <h3>Apple Store</h3>
                <ul>
                  <FooterProps linksName="Find a Store" />
                  <FooterProps linksName="Genius Bar" />
                  <FooterProps linksName="Today at Apple" />
                  <FooterProps linksName="Apple Camp" />
                  <FooterProps linksName="Today at Apple" />
                  <FooterProps linksName="Field Trip" />
                  <FooterProps linksName="Apple Store App" />
                  <FooterProps linksName="Refurbished and Clearance" />
                  <FooterProps linksName="Financing" />
                  <FooterProps linksName="Apple Trade In" />
                  <FooterProps linksName="Order Status" />
                  <FooterProps linksName="Shopping Help" />
                </ul>
              </div>
              <div className="links-wrapper-4 col-sm-12 col-md">
                <h3>For Business</h3>
                <ul>
                  <FooterProps linksName="Apple and Business" />
                  <FooterProps linksName="Apple and Business" />
                  <FooterProps linksName="Shop for Business" />
                  <h3>For Education</h3>
                  <FooterProps linksName="Apple and Education" />
                  <FooterProps linksName="Shop for College" />
                  <h3>For Healthcare</h3>
                  <FooterProps linksName="Apple Store Account" />
                  <FooterProps linksName="iCloud.com" />
                  <h3>For Government</h3>
                  <FooterProps linksName="Apple and Education" />
                  <FooterProps linksName="Shop for College" />
                </ul>
              </div>
              <div className="links-wrapper-5 col-sm-12 col-md">
                <h3>Apple Values</h3>
                <ul>
                  <FooterProps linksName="Find a Store" />
                  <FooterProps linksName="Genius Bar" />
                  <FooterProps linksName="Today at Apple" />
                  <FooterProps linksName="Apple Camp" />
                  <FooterProps linksName="Apple Store App" />
                  <h3>About Apple</h3>
                  <FooterProps linksName="Find a Store" />
                  <FooterProps linksName="Genius Bar" />
                  <FooterProps linksName="Today at Apple" />
                  <FooterProps linksName="Field Trip" />
                  <FooterProps linksName="Apple Store App" />
                </ul>
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
              <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <FooterProps linksName="Privacy Policy" />
                  <FooterProps linksName="Terms of Use" />
                  <FooterProps linksName="Sales and Refunds" />
                  <FooterProps linksName="Legal" />
                  <FooterProps linksName="Site Map" />
                </ul>
                <br />
                <br />
                <br />
              </div>
              <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={FooterIMG} />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default FooterLinks;
