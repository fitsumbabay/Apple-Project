import React, { Component } from "react";

class Fifthprops extends Component {
  render() {
    return (
      <div>
        <div className={this.props.contaner}>
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={this.props.imgName} />
            </div>
          </div>
          <div className={`description-wraper ${this.props.white}`}>
            {this.props.description}
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">
                  {this.props.linkName}
                  <sup>{this.props.supper}</sup>
                </a>
              </li>
              <li>
                <a href="">{this.props.linkName2}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Fifthprops;
