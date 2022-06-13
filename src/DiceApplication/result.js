import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>
          Bạn Chọn: <span className="text-danger lh-lg">TÀI</span>
        </h1>
        <h2>
          Số lần thắng: <span className="text-success">0</span>
        </h2>
        <h2>
          Tổng số lần chơi: <span className="text-primary">0</span>
        </h2>

        <button className="btn btn-success px-5 py-3 mt-4">Play Game</button>
      </div>
    );
  }
}

export default Result;
