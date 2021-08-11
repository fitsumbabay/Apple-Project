import React, { Component } from "react";
class FourthPorps extends Component {
  render() {
    return (
      <div>
        {/* <div className={`col-sm-12 col-md-6} ${this.props.sideWrapper}`}> */}
        <div className={this.props.contaners}>
          <div
            className={`title-wraper ${this.props.white} ${this.props.black}`}
          >
            {this.props.tittleWrapper}
          </div>
          <div className="description-wraper">{this.props.description}</div>
          <div className="price-wrapper">
            {this.props.price}
            <sup>1</sup>
          </div>
          <div
            className={`links-wrapper ${this.props.white} ${this.props.black}`}
          >
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{this.props.linkWrapper}</a>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
      //     </div>
      //   </section>
      // </div>
    );
  }
}
export default FourthPorps;
