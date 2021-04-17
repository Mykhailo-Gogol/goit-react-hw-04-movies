import "./MovieList.scss";
import { useState, useEffect } from "react";

// Comp
import MovieItem from "../MoviesItem";

// Api
import { Trending } from "../../services/api";

const MovieList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    Trending().then(({ results }) => setFilms(results));
  }, []);

  return (
    <>
      <h1 className="moviesListHeading">Trending Movies</h1>
      <ul className="moviesList">
        {films &&
          films.map(
            ({ id, original_title, overview, poster_path }) =>
              original_title && (
                <MovieItem
                  key={id}
                  id={id}
                  original_title={original_title}
                  overview={overview}
                  poster_path={poster_path}
                />
              )
          )}
      </ul>
    </>
  );
};

export default MovieList;
