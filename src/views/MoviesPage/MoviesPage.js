import "./MoviesPage.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Api
import { MovieByQuery } from "../../services/api";

// Comp
import MovieItem from "../../components/MoviesItem";

const MoviesPage = () => {
  const { pathname } = useLocation();
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  const handleQueryChange = ({ target }) => {
    setsearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    const filmsLS = JSON.parse(window.localStorage.getItem("films"));
    setFilms(filmsLS);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (query) {
      MovieByQuery(query).then(({ results }) => {
        setFilms(results);
      });
    }
    window.localStorage.setItem("films", JSON.stringify(films));
    // eslint-disable-next-line
  }, [query, films]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="moviesForm">
        <button type="submit">Search</button>
        <input
          value={search}
          type="text"
          name="query"
          onChange={handleQueryChange}
        />
      </form>
      <ul className="moviesList">
        {films &&
          films.map(({ id, original_title, poster_path, overview }) => {
            return (
              <MovieItem
                key={id}
                id={id}
                original_title={original_title}
                poster_path={poster_path}
                overview={overview}
                pathname={pathname}
                query={query}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
