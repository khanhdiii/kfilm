import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header/Header";
import ViewAll from "./components/ViewAll/ViewAll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/viewall" element={<ViewAll />} />
      </Routes>
    </Router>
  );
}

export default App;
