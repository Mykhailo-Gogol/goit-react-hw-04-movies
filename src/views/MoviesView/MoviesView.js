import "./MoviesView.scss";
import { useState, useEffect } from "react";
import { MovieByQuery } from "../../services/api";
import MovieItem from "../../components/MoviesItem/";

const MoviesView = ({ match, history, location }) => {
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
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
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <button type="submit">Search</button>
          <input
            value={search}
            type="text"
            name="query"
            onChange={handleQueryChange}
          />
        </form>
        <ul className="baseList">
          {films &&
            films.map(({ id, original_title, poster_path, overview }) => {
              return (
                <MovieItem
                  key={id}
                  id={id}
                  original_title={original_title}
                  poster_path={poster_path}
                  overview={overview}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MoviesView;
