import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import fetchAPI, {
  API_TVSHOWS,
  API_FEATUREFILM,
  API_TELEVISIONSERIES,
  API_CARTOON,
  API_COUNTRY,
  API_CATEGORY,
  URL_FILM,
} from "../../utils/fetchAPI";

import Header from "../Header/Header";
import "../scss/base.scss";
import "./home.scss";

function Home({ api }) {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
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
  const currentPage = 1;

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const allMovies = await fetchAPI(
          `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`
        );
        setMovies(allMovies.items);

        const featureFilm = await fetchAPI(API_FEATUREFILM);
        setFeatureFilmData(featureFilm.data);

        const televisionSeries = await fetchAPI(API_TELEVISIONSERIES);
        setTelevisionSeriesData(televisionSeries.data);

        const cartoon = await fetchAPI(API_CARTOON);
        setCartoonData(cartoon.data);

        const tvShows = await fetchAPI(API_TVSHOWS);
        setTvShowsData(tvShows.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, [currentPage]);

  const responsiveSlide = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 8,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 4,
      partialVisibilityGutter: 30,
    },
  };

  const handleViewAllMovies = async (api) => {
    try {
      const allMovies = await fetchAPI(`${api}?page=1&limit=20`);
      navigate("/viewall", {
        state: { movies: allMovies.data.items, api: api }, // Truyền giá trị api vào props
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <div className="slider__movie">
          <ul>
            <Carousel
              autoPlay
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slider-image"
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsiveSlide}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={3}
              swipeable
            >
              {movies &&
                movies.length > 0 &&
                movies.map((movie) => (
                  <li key={movie._id} className="slider__movies-content">
                    <Link to={`detailmovie/${movie.slug}`}>
                      <img src={movie.poster_url} alt={movie.name} />
                      <h3 className="slider__movie-name">{movie.name}</h3>
                      <p>{movie.year}</p>
                    </Link>
                  </li>
                ))}
            </Carousel>
          </ul>
        </div>

        {/* feature-film */}
        <section className="feature-film">
          <header>
            <h3 class="title-name">{featureFilmData.titlePage}</h3>
            <a
              class="watch-all"
              data-api="${api}"
              onClick={() => handleViewAllMovies(API_FEATUREFILM, currentPage)}
            >
              Xem tất cả
              <i class="fa-light fa-chevron-right"></i>
            </a>
          </header>

          <ul>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slider-image__film"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={3}
              swipeable
            >
              {featureFilmData &&
                featureFilmData.items.map((movie) => {
                  return (
                    <div className="slider__conainer-movies">
                      <li key={movie._id} className="slider__movies-content">
                        <Link to={`detailmovie/${movie.slug}`}>
                          <img
                            className="slider__movies-images"
                            src={`${URL_FILM}/${movie.poster_url}`}
                            alt={movie.name}
                          />
                        </Link>
                      </li>
                      <Link to={`detailmovie/${movie.slug}`}>
                        <h3 className="slider__movie-name">{movie.name}</h3>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </ul>
        </section>

        {/* television-series */}
        <section className="television-series">
          <header>
            <h3 class="title-name">{televisionSeriesData.titlePage}</h3>
            <a
              class="watch-all"
              data-api="${api}"
              onClick={() => handleViewAllMovies(API_TELEVISIONSERIES)}
            >
              Xem tất cả
              <i class="fa-light fa-chevron-right"></i>
            </a>
          </header>

          <ul>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slider-image__film"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {televisionSeriesData &&
                televisionSeriesData.items.map((movie) => {
                  return (
                    <div className="slider__conainer-movies">
                      <li key={movie._id} className="slider__movies-content">
                        <Link to={`detailmovie/${movie.slug}`}>
                          <img
                            className="slider__movies-images"
                            src={`${URL_FILM}/${movie.poster_url}`}
                            alt={movie.name}
                          />
                        </Link>
                      </li>
                      <Link to={`detailmovie/${movie.slug}`}>
                        <h3 className="slider__movie-name">{movie.name}</h3>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </ul>
        </section>

        {/* cartoon */}
        <section className="cartoon">
          <header>
            <h3 class="title-name">{cartoonData.titlePage}</h3>
            <a
              class="watch-all"
              data-api="${api}"
              onClick={() => handleViewAllMovies(API_CARTOON)}
            >
              Xem tất cả
              <i class="fa-light fa-chevron-right"></i>
            </a>
          </header>

          <ul>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slider-image__film"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {cartoonData &&
                cartoonData.items.map((movie) => {
                  return (
                    <div className="slider__conainer-movies">
                      <li key={movie._id} className="slider__movies-content">
                        <Link to={`detailmovie/${movie.slug}`}>
                          <img
                            className="slider__movies-images"
                            src={`${URL_FILM}/${movie.poster_url}`}
                            alt={movie.name}
                          />
                        </Link>
                      </li>
                      <Link to={`detailmovie/${movie.slug}`}>
                        <h3 className="slider__movie-name">{movie.name}</h3>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </ul>
        </section>

        {/* tvshows */}
        <section className="tvshows">
          <header>
            <h3 class="title-name">{tvShowsData.titlePage}</h3>
            <a
              class="watch-all"
              data-api="${api}"
              onClick={() => handleViewAllMovies(API_TVSHOWS)}
            >
              Xem tất cả
              <i class="fa-light fa-chevron-right"></i>
            </a>
          </header>

          <ul>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="slider-image__film"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {tvShowsData &&
                tvShowsData.items.map((movie) => {
                  return (
                    <div className="slider__conainer-movies">
                      <li key={movie._id} className="slider__movies-content">
                        <Link to={`detailmovie/${movie.slug}`}>
                          <img
                            className="slider__movies-images"
                            src={`${URL_FILM}/${movie.poster_url}`}
                            alt={movie.name}
                          />
                        </Link>
                      </li>
                      <Link to={`detailmovie/${movie.slug}`}>
                        <h3 className="slider__movie-name">{movie.name}</h3>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
