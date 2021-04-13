import { useState, useEffect } from "react";
import MovieItem from "../MoviesItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  baseList: {
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  baseHeading: {
    textAlign: "center",
  },
});

const MovieList = ({ trending, url, location }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    trending().then(({ results }) => setFilms(results));
  }, [trending]);

  const classes = useStyles();

  return (
    <>
      <h1 className={classes.baseHeading}>Trending Movies</h1>
      <ul className={classes.baseList}>
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
