import React, { Component } from "react";
import Commenprops from "./Commenprops";
class FirstHighlight extends Component {
  render() {
    return (
      <div>
        <section class="first-hightlight-wrapper">
          <Commenprops New="New" tittleWrapper="iPad Pro" black="black" />
          <div class="ipod-caption row">
            <div class="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div class="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default FirstHighlight;
