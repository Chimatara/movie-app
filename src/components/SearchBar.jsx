import React, { useState } from "react";
import MovieCards from "./MovieCards";
import MovieOption from "./MovieOption";
import FetchData from "./FetchData";

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const keys = ['original_title']

  const search = (data) => {
    return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  
  
  return (
    <div className="searchbar">
      <input type="text" placeholder="what do you want to watch?"
      value={searchQuery}
      onChange={handleSearchInputChange} 
      />
      
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="design">

     
      {/* <div className="movie-container">
      
      <MovieOption />
        <MovieCards data={search(moviesToShow)} />
      </div> */}
      {/* <MovieCards data={search(data)} /> */}
 
      </div>
    </div>
  );
};

export default SearchBar;
