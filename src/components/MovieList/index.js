import { useState, useEffect } from "react";
import MovieItem from "../MovieItem";
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

const MovieList = ({ trending }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    trending().then(({ results }) => setFilms(results));
  }, [trending]);

  const classes = useStyles();

  return (
    <>
      <h1 className={classes.baseHeading}>Movies</h1>
      <ul className={classes.baseList}>
        {films.map(({ id, title, overview }) => (
          <MovieItem key={id} title={title} overview={overview} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
