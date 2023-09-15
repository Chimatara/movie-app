import React from "react";
import Play from "./images/Play.svg";

const Button = () => {
  return (
    <div className="button">
      <button className="btn">
        <img src={Play} alt="" />
        <a href="#">WATCH TRAILER</a>
      </button>
    </div>
  );
};

export default Button;
