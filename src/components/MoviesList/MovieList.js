import "./MovieList.scss";
import { useState, useEffect } from "react";
import MovieItem from "../MoviesItem";

const MovieList = ({ trending, url, location }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    trending().then(({ results }) => setFilms(results));
  }, [trending]);

  return (
    <>
      <h1 className="baseHeading">Trending Movies</h1>
      <ul className="baseList">
        {films &&
          films.map(
            ({ id, original_title, overview, poster_path }) =>
              original_title && (
                <MovieItem
                  key={id}
                  id={id}
                  original_title={original_title}
                  overview={overview}
                  url={url}
                  poster_path={poster_path}
                  location={location}
                />
              )
          )}
      </ul>
    </>
  );
};

export default MovieList;
