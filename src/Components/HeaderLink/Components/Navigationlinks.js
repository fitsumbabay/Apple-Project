import React, { Component } from "react";

class Navigationlinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.linkURL}>
          {this.props.linkName}
        </a>
      </li>
    );
  }
}

export default Navigationlinks;
