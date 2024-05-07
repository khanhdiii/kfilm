import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams, Link, useNavigate } from "react-router-dom";

import fetchAPI from "../../utils/fetchAPI";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { FaPlay } from "react-icons/fa6";
import "./moviedetails.scss";
import "../scss/base.scss";

function MovieDetails() {
  const navigate = useNavigate();

  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  // click chapter film
  const handleEpisodeClick = (index) => {
    setSelectedEpisode(index);
    navigate(`/watchmovie/${slug}/tap-${index + 1}`);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const API_MOVIE_DETAILS = `https://phimapi.com/phim/${slug}`;
        const movieDetails = await fetchAPI(API_MOVIE_DETAILS);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [slug]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="main-page">
      <Header />
      <div className="background-movie">
        <div>
          <figure>
            <img src={movie.movie.thumb_url} alt="" />
          </figure>
        </div>
        <div className="movie-info">
          <h3>{movie.movie.name}</h3>
          <div className="movie-info__bottom">
            <Link
              to={`/watchmovie/${slug}/${movie.episodes[0].server_data[0].slug}`}
              className="watch-now"
            >
              Xem ngay
              <FaPlay className="background-movie__info" />
            </Link>
            {/* <span className="quality">{movie.movie.quality}</span> */}
            <span className="year">{movie.movie.year}</span>
            <span className="episode_current">
              {movie.movie.episode_current}
            </span>
            <span className="type">#{movie.movie.type}</span>
          </div>
        </div>
      </div>

      <div className="information-movie">
        {/* <h4 className="information-movie-tagname">Các tập phim</h4>
        <div className="episode-list">
          {movie.episodes[0].server_data.map((episode, index) => (
            <div
              className={`episode ${index === selectedEpisode ? "active" : ""}`}
              key={index}
              data-index={index}
              onClick={() => handleEpisodeClick(index)}
            >
              {episode.name}
            </div>
          ))}
        </div> */}

        <p className="infomation-movie__content">{movie.movie.content}</p>
        {movie.movie.country && movie.movie.country.length > 0 && (
          <span className="infomation-movie__country">
            <h4 className="information-movie-tagname"> Quốc gia</h4>
            {movie.movie.country[0].name}
          </span>
        )}

        <span className="infomation-movie__time">
          Thời gian: {movie.movie.time}
        </span>
        {movie.movie.director && movie.movie.director.length > 0 && (
          <ul className="infomation-movie__director">
            <h4 className="information-movie-tagname">Đạo diễn</h4>
            {movie.movie.director.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
        {movie.movie.actor && movie.movie.actor.length > 0 && (
          <ul className="infomation-movie__actor">
            <h4 className="information-movie-tagname">Diễn viên</h4>
            {movie.movie.actor.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}

        {movie.movie.category && movie.movie.category.length > 0 && (
          <ul className="infomation-movie__category">
            <h4 className="information-movie-tagname">Thể loại</h4>
            {movie.movie.category.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))}
          </ul>
        )}
        {movie.movie.trailer_url ? (
          <ReactPlayer
            url={movie.movie.trailer_url}
            width="100%"
            height="640px"
            playing="false"
            controls
            volume={0.5}
          />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
