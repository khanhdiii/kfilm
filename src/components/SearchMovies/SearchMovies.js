import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import queryString from "query-string";

import fetchAPI, { URL_FILM } from "../../utils/fetchAPI";

import "./searchmovie.scss";
import { AiOutlineSearch } from "react-icons/ai";

function SearchMovies({ film }) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // State để theo dõi trạng thái focus
  const [mouseEnteredResults, setMouseEnteredResults] = useState(false); // State để theo dõi khi chuột vào danh sách kết quả

  const limitDefault = 18;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const queryParams = queryString.stringify({
          keyword: searchTerm,
          limit: limitDefault,
        });
        const response = await fetchAPI(
          `https://phimapi.com/v1/api/tim-kiem?keyword=${searchTerm}&limit=${limitDefault}`
        );

        setSearchResults(response.data.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  }, [searchTerm]);

  // Xử lý sự kiện khi ô tìm kiếm mất focus
  const handleSearchBlur = () => {
    setTimeout(() => {
      if (!mouseEnteredResults) {
        setIsFocused(false);
      }
    }, 100); // Khoảng thời gian nhất định trước khi ẩn kết quả
  };

  // Xử lý sự kiện khi ô tìm kiếm được focus
  const handleSearchFocus = () => {
    setIsFocused(true);
  };

  // Xử lý sự kiện khi chuột vào danh sách kết quả
  const handleResultsMouseEnter = () => {
    setMouseEnteredResults(true);
  };

  // Xử lý sự kiện khi chuột rời khỏi danh sách kết quả
  const handleResultsMouseLeave = () => {
    setMouseEnteredResults(false);
  };

  return (
    <div className="search-container">
      <div className={`search-wrapper ${isFocused ? "focused" : ""}`}>
        <input
          className="search-input"
          type="text"
          placeholder="Tìm kiếm phim..."
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleSearchBlur} // Gắn sự kiện onBlur để xác định khi mất focus
          onFocus={handleSearchFocus} // Gắn sự kiện onFocus để xác định khi được focus
        />
        <div className="search-icon">
          <AiOutlineSearch color="white" />
        </div>
      </div>
      {/* Chỉ hiển thị kết quả tìm kiếm khi ô tìm kiếm được focus hoặc chuột vào danh sách kết quả */}
      {(isFocused || mouseEnteredResults) && (
        <ul
          className="search-results"
          onMouseEnter={handleResultsMouseEnter}
          onMouseLeave={handleResultsMouseLeave}
        >
          {searchResults.map((movie) => (
            <li className="search-result-item" key={movie._id}>
              <Link to={`detailmovie/${movie.slug}`}>
                <div className="container-result">
                  <img
                    className="result-image"
                    src={`${URL_FILM}/${movie.poster_url}`}
                    alt={movie.name}
                  />
                  <span className="result-name">{movie.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchMovies;
