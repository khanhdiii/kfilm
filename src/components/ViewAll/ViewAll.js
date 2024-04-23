import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

import fetchAPI, { URL_FILM } from "../../utils/fetchAPI";

import Header from "../Header/Header";
import "./viewall.scss";
import "../scss/base.scss";

function ViewAll() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
      setTotalPages(response.data.params.pagination.totalPages);
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
    setCurrentPage(page.selected + 1); // +1 vì page.selected bắt đầu từ 0
  };

  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <h2 className="title-name">All Movies</h2>
        <ul className="movie-list">
          {movies &&
            movies.map((movie) => (
              <div key={movie._id} className="movie-item">
                <li className="movie-content">
                  <Link to={`/detailmovie/${movie.slug}`}>
                    <img
                      className="movie-image"
                      src={`${URL_FILM}/${movie.poster_url}`}
                      alt={movie.name}
                    />
                  </Link>
                  <Link to={`/detailmovie/${movie.slug}`}>
                    <h3 className="movie-name">{movie.name}</h3>
                  </Link>
                  <p className="movie-year">{movie.year}</p>
                </li>
              </div>
            ))}
        </ul>
        <section className="pagination-container">
          {/* Hiển thị phân trang */}
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePaginationChange}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </section>
      </div>
    </div>
  );
}

export default ViewAll;
