import React from "react";
// import "../Commonfiles/css/styles.css";
// import "../Commonfiles/css/bootstrap.css";
import appleLogo from "../Commonfiles/images/icons/logo-sm.png";
import Search from "../Commonfiles/images/icons/search-icon-sm.png";
import myCart from "../Commonfiles/images/icons/cart-sm.png";
import Navigationlinks from "./Navigationlinks";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={appleLogo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <Navigationlinks linkURL="/mac" linkName="Mac" />
              <Navigationlinks linkURL="/iphone" linkName="iphone" />
              <Navigationlinks linkURL="/ipad" linkName="ipad" />
              <Navigationlinks linkURL="/Watch" linkName="Watch" />
              <Navigationlinks linkURL="/TV" linkName="TV" />
              <Navigationlinks linkURL="/Music" linkName="Music" />
              <Navigationlinks linkURL="/Support" linkName="Support" />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={Search} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={myCart} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
