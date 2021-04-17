import "./MovieDetailsPage.scss";
import { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";

// Api
import { MovieDetailsById } from "../../services/api.js";

// Utils
import routes from "../../routes/routes";
import poster_width from "../../utils/poster_width";
import defaultImage from "../../images/default-image.jpeg";

// Comp
import CastView from "../../components/CastView/CastView";
import ReviewsView from "../../components/ReviewsView/Review";

const MovieDetailsPage = ({ match, history, location }) => {
  const { movieId } = match.params;
  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    MovieDetailsById(movieId).then((res) => {
      setCurrentMovieDetails(res);
      setPosterPath(res.poster_path);
    });
  }, [movieId]);

  useEffect(() => {}, [movieId]);

  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = currentMovieDetails;

  const shouldDetailesRender =
    original_title && release_date && vote_average && overview && genres;

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <div className="movieDetailsPage">
      <button type="button" className="goBackButton" onClick={handleGoBack}>
        Back
      </button>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "30px" }}>
          <img
            src={
              posterPath
                ? `https://themoviedb.org/t/p/${poster_width.mobile}${posterPath}`
                : defaultImage
            }
            alt={original_title}
          />
        </div>
        {shouldDetailesRender && (
          <div className="details_container">
            <h1>{original_title}</h1>
            <p>Release date: {release_date.slice(0, 4)}</p>
            <p>User Score {`${vote_average * 10} %`}</p>
            <h2>Overview</h2>
            <p style={{ width: "500px" }}>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="additionalInfoNav">
        <h2>Additional information</h2>
        <NavLink
          to={`${match.url}${routes.cast}`}
          className="additional-NavLink"
          activeClassName="additional-NavLink--active"
        >
          Cast
        </NavLink>
        <NavLink
          to={`${match.url}${routes.reviews}`}
          className="additional-NavLink"
          activeClassName="additional-NavLink--active"
        >
          Reviews
        </NavLink>
      </div>
      <div className="additionalInfo">
        <Route
          path={`${match.path}${routes.cast}`}
          render={() => <CastView id={movieId} />}
        />
        <Route
          path={`${match.path}${routes.reviews}`}
          render={() => <ReviewsView id={movieId} />}
        />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
