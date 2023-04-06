import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieForm from "./MovieForm";
import { nanoid } from "nanoid";
import './styles.css';


function App() {
  const [movies, setMovies] = useState([
    {
      id: nanoid(),
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 9.3,
    },
    {
      id: nanoid(),
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rating: 9.2,
    },
    {
      id: nanoid(),
      title: "The Godfather: Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      posterURL:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Godfather_part_II.jpg",
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { id: nanoid(), ...newMovie }]);
  };

  const handleFilter = (title, rating) => {
    setTitleFilter(title);
    setRatingFilter(rating);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>My Movie List</h1>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <h2>Add a Movie</h2>
      <MovieForm handleAddMovie={handleAddMovie} />
    </div>
  );
}



export default App;

