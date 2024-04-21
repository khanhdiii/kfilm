import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import fetchAPI, { URL_FILM } from "../../utils/fetchAPI";
import "./viewall.scss";
import Header from "../Header/Header";

function ViewAll() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    if (location.state && location.state.movies) {
      setMovies(location.state.movies);
    }
  }, [location]);

  const fetchData = async (page, api) => {
    try {
      const response = await fetchAPI(`${api}?page=${page}&limit=${limit}`);
      setMovies(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (location.state && location.state.api) {
      fetchData(currentPage, location.state.api); // Sử dụng giá trị api từ props
    }
  }, [currentPage, location]);

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="view-all">
      <Header />
      <h2>All Movies</h2>
      <ul className="movie-list">
        {movies &&
          movies.map((movie) => (
            <div key={movie._id} className="movie-item">
              <li className="movie-content">
                <Link to={`detailmovie/${movie._id}`}>
                  <img
                    className="movie-image"
                    src={`${URL_FILM}/${movie.poster_url}`}
                    alt={movie.name}
                  />
                </Link>
                <Link to={`detailmovie/${movie._id}`}>
                  <h3 className="movie-name">{movie.name}</h3>
                </Link>
                <p className="movie-year">{movie.year}</p>
              </li>
            </div>
          ))}
      </ul>

      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => handlePaginationChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="pagination-page">{currentPage}</span>
        <button
          className="pagination-btn"
          onClick={() => handlePaginationChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ViewAll;
