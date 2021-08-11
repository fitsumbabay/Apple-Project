import React, { Component } from "react";
import "../Main/css/bootstrap.css";
import "../Main/css/styles.css";
class FooterProps extends Component {
  render() {
    return (
      <div>
        <li>
          <a href="#">{this.props.linksName}</a>
        </li>
      </div>
    );
  }
}
export default FooterProps;
