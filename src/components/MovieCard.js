import React from "react";
import "./MovieCard.css";
import MovieContros from "./MovieContros";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movies-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieContros movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
