import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <p className="card-text"><small className="text-muted">Rating: {movie.rating}</small></p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
