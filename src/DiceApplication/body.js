import React, { Component } from "react";
import { connect } from "react-redux";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import four from "../img/4.png";
import five from "../img/5.png";
import six from "../img/6.png";
import "./body.css";

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onGetSelected } = this.props;

    return (
      <div style={{ height: 200 }} className="d-flex">
        <div
          id="high"
          onClick={() => onGetSelected("TÀI")}
          style={{ position: "relative" }}
          className="p-2 flex-fill"
        >
          <div
            style={{
              right: 10,
            }}
            className="text-white component"
          >
            TÀI
          </div>
        </div>
        <div
          style={{
            marginTop: 15,
          }}
          className="p-2 flex-fill"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="container"
          >
            <img
              className="mx-1"
              src={one}
              alt="one"
              width={80}
              height={80}
            ></img>
            <img
              className="mx-1"
              src={two}
              alt="two"
              width={80}
              height={80}
            ></img>
            <img
              className="mx-1"
              src={three}
              alt="three"
              width={80}
              height={80}
            ></img>
          </div>
        </div>

        <div
          id="low"
          onClick={() => onGetSelected("XỈU")}
          style={{ position: "relative" }}
          className="p-2 flex-fill"
        >
          <div
            style={{
              left: 10,
            }}
            className="text-white component"
          >
            XỈU
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSelected: (stateSelected) => {
      const action = { type: "GET_SELECTED", stateSelected };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
