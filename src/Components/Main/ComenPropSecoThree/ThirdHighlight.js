import React, { Component } from "react";
import Commenprops from "./Commenprops";
class ThirdHighlight extends Component {
  render() {
    return (
      <div>
        <section class="third-hightlight-wrapper">
          <Commenprops
            white="white"
            Outerwrapper="third-hightlight-wrapper"
            tittleWrapper="iPhone 11 Pro"
            descriptionWrapper="Pro cameras. Pro display. Pro performance."
            priceWrapper="From $24.95/mo. or $599 with trade‑in."
          />
        </section>
      </div>
    );
  }
}
export default ThirdHighlight;
