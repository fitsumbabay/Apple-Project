import React, { Component } from "react";
import Commenprops from "./Commenprops";
class SecondHighlight extends Component {
  render() {
    return (
      <div>
        <section class="second-hightlight-wrapper">
          <Commenprops
            New="New"
            tittleWrapper="MacBook Air"
            descriptionWrapper="Twice the speed. Twice
            the storage"
            priceWrapper="From $999"
            black="black"
          />
        </section>
      </div>
    );
  }
}
export default SecondHighlight;
