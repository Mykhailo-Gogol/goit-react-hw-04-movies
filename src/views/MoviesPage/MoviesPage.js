import "./MoviesPage.scss";
import { useLocation, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Api
import { MovieByQuery } from "../../services/api";

// Comp
import MovieItem from "../../components/MoviesItem";

const MoviesPage = ({ match }) => {
  const { pathname, state } = useLocation();
  console.log(pathname, state);
  const [search, setsearch] = useState(state || "");
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
    if (query) {
      MovieByQuery(query).then(({ results }) => {
        setFilms(results);
      });
    }
  }, [query]);

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
                url={match.url}
                pathname={pathname}
                query={query}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default withRouter(MoviesPage);
