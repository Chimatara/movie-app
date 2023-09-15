import React from "react";
import MovieCards from "./MovieCards";

const MovieOption = ({data}) => {
  return (
    <div>
      <div className="options">
        <h2>Featured Movies</h2>
        <a href="#">See more &gt;</a>
      </div>
    </div>
  );
};

export default MovieOption;
