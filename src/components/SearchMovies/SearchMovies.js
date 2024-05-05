import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import queryString from "query-string";

import fetchAPI, { URL_FILM } from "../../utils/fetchAPI";

import "./searchmovie.scss";

function SearchMovies({ film }) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([{}]);

  const limitDefault = 18;
  let index = 1,
    limitNew = limitDefault * index;
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
          `https://phimapi.com/v1/api/tim-kiem?keyword=${searchTerm}&limit=${limitNew}`
        );
        // const data = await response.json();
        // console.log(data);
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

  console.log("searchTerm", searchTerm);

  console.log("searchre", searchResults);

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="search-results">
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
    </div>
  );
}

export default SearchMovies;
