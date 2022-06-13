import React, { Component } from "react";
import backgroundImg from "../img/bgGame.png";
import Body from "./body";
import Header from "./header";
import Result from "./result";

class DiceApplication extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "731px",
        }}
      >
        <div className="container">
          <Header />
          <Body />
          <Result />
        </div>
      </div>
    );
  }
}

export default DiceApplication;
