import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedState } from "../reducers/diceAppReducer";
import cn from "classnames";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import "./body.css";

const Body = () => {
  const { selectedState } = useSelector((state) => state.diceapp);
  const dispatch = useDispatch();
  const handleGetState = (isSelectedState) => {
    dispatch(getSelectedState(isSelectedState));
  };
  return (
    <div style={{ height: 200 }} className="d-flex">
      <div
        style={{ position: "relative" }}
        className="p-2 flex-fill"
        onClick={() => handleGetState("HIGH")}
      >
        <div
          id="high"
          style={{
            right: 10,
          }}
          // className="text-white component"
          className={cn("text-white component", {
            selected: selectedState === "TÀI",
          })}
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
            width: "50%",
            height: 100,
          }}
          className="container bg-light"
        >
          <img className="mt-2 mx-2" src={one} alt="one" width={80} height={80}></img>
          <img className="mt-2 mx-2" src={two} alt="two" width={80} height={80}></img>
          <img className="mt-2 mx-2" src={three} alt="three" width={80} height={80}></img>
        </div>
      </div>

      <div id="low" style={{ position: "relative" }} className="p-2 flex-fill">
        <div
          style={{
            left: 10,
          }}
          // className="text-white component"
          className={cn("text-white component", {
            selected: selectedState === "XỈU",
          })}
          onClick={() => handleGetState("LOW")}
        >
          XỈU
        </div>
      </div>
    </div>
  );
};

export default Body;
