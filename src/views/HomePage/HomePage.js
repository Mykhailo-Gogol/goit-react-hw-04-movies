import "./HomePage.scss";
import React, { useState, useEffect } from "react";

// Material
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Api
import { Trending } from "../../services/api";

// Comp
import MovieItem from "../../components/MovieItem";

// Styles
const useStyles = makeStyles({
  home_page_heading: {
    textAlign: "center",
  },
});

const HomePage = () => {
  const classes = useStyles();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    Trending().then(({ results }) => setFilms(results));
  }, []);

  return (
    <React.Fragment>
      <h1 className={classes.home_page_heading}>Trending Movies</h1>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {films.map(
            ({ id, original_title, overview, poster_path }) =>
              id &&
              original_title &&
              overview &&
              poster_path && (
                <Grid key={id} item xs={12} sm={6} md={3} ld={3} xl={3}>
                  <Container maxWidth="xs">
                    <MovieItem
                      id={id}
                      original_title={original_title}
                      overview={overview}
                      poster_path={poster_path}
                    />
                  </Container>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
