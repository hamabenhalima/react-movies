import React, { useState } from "react";

function MovieForm({ handleAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };
    handleAddMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Poster URL:
        <input
          type="url"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
