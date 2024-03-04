import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";
const MovieList = ({ filterMovie }) => {
  return (
    <div className="movie-list">
      {filterMovie.map((movie, index) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
