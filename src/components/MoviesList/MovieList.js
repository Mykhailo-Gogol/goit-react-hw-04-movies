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

const MovieList = ({ trending, url }) => {
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
            ({ id, title, overview }) =>
              title && (
                <MovieItem
                  key={id}
                  id={id}
                  title={title}
                  overview={overview}
                  url={url}
                />
              )
          )}
      </ul>
    </>
  );
};

export default MovieList;
