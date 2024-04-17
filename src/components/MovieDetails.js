import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Replace these API URLs with your actual API endpoints
        const API_MOVIE_DETAILS = `https://api.example.com/movie/${id}`;
        const movieDetails = await fetchAPI(API_MOVIE_DETAILS);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default MovieDetails;
