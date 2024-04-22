import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header/Header";
import ViewAll from "./components/ViewAll/ViewAll";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import WatchMovie from "./components/WatchMovie/WatchMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailmovie/:slug" element={<MovieDetails />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/watchmovie/:slug/:episodeSlug" element={<WatchMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
