import React, { Component } from "react";
import "./css/style.css";

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      value: 5,
    };
  }

  increment = () => {
    this.setState((state) => {
      if (state.value < 10) {
        return {
          value: state.value + 1,
        };
      }
    });
  };
  decrement = () => {
    this.setState((state) => {
      if (state.value > 0) {
        return {
          value: state.value - 1,
        };
      }
    });
  };
  render() {
    // Conditional rendering in react
    let initalText = "Average rating:";
    let changeText = "You rating this product:";
    let displayText = "";

    // let counter = 1;
    if (this.state.value != 5) {
      // counter = counter + 1;
      displayText = changeText;
    } else {
      displayText = initalText;
    }
    // if (counter >= 2) {
    //   displayText = changeText;
    // } else {
    //   displayText = initalText;
    // }
    return (
      <div className="rating-wrapper">
        <h3>please rate this mac out of 10</h3>
        <div>
          <button className="positive" onClick={this.increment}>
            Rate up
          </button>
          <button className="negative" onClick={this.decrement}>
            Rate down
          </button>
          <div className="rating-result">
            {displayText} {this.state.value}
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
