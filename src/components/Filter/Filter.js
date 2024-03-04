import React, { useState } from "react";
import MovieList from "../MovieList/MovieList";
const Filter = ({ ratingChange, searchInput, movieData }) => {
  var filterMovie = movieData.filter(
    (movie, index) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      movie.rating >= ratingChange
  );
  return <div>{<MovieList filterMovie={filterMovie} />}</div>;
};

export default Filter;
