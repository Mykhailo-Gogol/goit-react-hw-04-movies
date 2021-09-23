import "./MoviesPage.scss";
import { useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

// Api
import { MovieByQuery } from "../../services/api";

// Material
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Comp
import MovieItem from "../../components/MovieItem";

const MoviesPage = () => {
  const { state } = useLocation();
  const [search, setsearch] = useState(state?.query || "");
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
      <form onSubmit={handleSubmit} className="movies_form">
        <button type="submit" className="search_button">
          Search
        </button>
        <input
          value={search}
          type="text"
          name="query"
          onChange={handleQueryChange}
          className="search_input"
        />
      </form>
      <Fragment>
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
      </Fragment>
    </div>
  );
};

export default MoviesPage;
