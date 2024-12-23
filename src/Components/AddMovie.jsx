// This component allows users to add a new movie.

import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleChange}
        min="0"
        max="5"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
