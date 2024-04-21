import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import fetchAPI, {
  API_TVSHOWS,
  API_FEATUREFILM,
  API_TELEVISIONSERIES,
  API_CARTOON,
  API_COUNTRY,
  API_CATEGORY,
  URL_FILM,
} from "../../utils/fetchAPI";

function MovieDetails() {
  const [featureFilmData, setFeatureFilmData] = useState({
    items: [],
    titlePage: "",
  });

  const [televisionSeriesData, setTelevisionSeriesData] = useState({
    items: [],
    titlePage: "",
  });
  const [cartoonData, setCartoonData] = useState({
    items: [],
    titlePage: "",
  });
  const [tvShowsData, setTvShowsData] = useState({
    items: [],
    titlePage: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const api = searchParams.get("api");

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const featureFilm = await fetchAPI(
          `${API_FEATUREFILM}?page=${currentPage}&limit=20`
        );
        setFeatureFilmData(featureFilm.data);

        const televisionSeries = await fetchAPI(
          `${API_TELEVISIONSERIES}?page=${currentPage}&limit=20`
        );
        setTelevisionSeriesData(televisionSeries.data);

        const cartoon = await fetchAPI(
          `${API_CARTOON}?page=${currentPage}&limit=20`
        );
        setCartoonData(cartoon.data);

        const tvShows = await fetchAPI(
          `${API_TVSHOWS}?page=${currentPage}&limit=20`
        );
        setTvShowsData(tvShows.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, [currentPage]);

  return (
    <div>
      <header>
        <div class="title-name">Danh sách tất cả phim ${data.titlePage}</div>
        <span class="current-page">${data.breadCrumb[1].name}</span>
      </header>
      <div class="movies">${movies(data.items)}</div>
    </div>
  );
}

export default MovieDetails;
