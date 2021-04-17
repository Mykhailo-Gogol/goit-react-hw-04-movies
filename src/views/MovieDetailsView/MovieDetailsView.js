import "./MovieDetailsView.scss";
import defaultImage from "../../images/default-image.jpeg";
import { useState, useEffect, Suspense, lazy } from "react";
import { Route, NavLink } from "react-router-dom";

import Routes from "../../routes/routes";
import PosterWidth from "../../utils/PosterWidth";
import { MovieDetailsById } from "../../services/api.js";

const CastView = lazy(() =>
  import("../../components/CastView/" /* webpackChunkName: "cast-page" */)
);
const ReviewsView = lazy(() =>
  import("../../components/ReviewsView/" /* webpackChunkName: "revies-page" */)
);

const MovieDetailsView = ({ match, history, location }) => {
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
    history.push(location?.state?.from || Routes.home);
  };

  return (
    <div className="MovieDetailsView">
      <button type="button" className="GoBackButton" onClick={handleGoBack}>
        Back
      </button>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "30px" }}>
          <img
            src={
              posterPath
                ? `https://themoviedb.org/t/p/${PosterWidth.mobile}${posterPath}`
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
      <div className="AdditionalInfoNav">
        <h2>Additional information</h2>
        <NavLink
          to={`${match.url}${Routes.cast}`}
          className="Additional-NavLink"
          activeClassName="Additional-NavLink--active"
        >
          Cast
        </NavLink>
        <NavLink
          to={`${match.url}${Routes.reviews}`}
          className="Additional-NavLink"
          activeClassName="Additional-NavLink--active"
        >
          Reviews
        </NavLink>
      </div>
      <div className="AdditionalInfo">
        <Suspense fallback={<h1>Load...</h1>}>
          <Route
            path={`${match.url}${Routes.cast}`}
            render={() => <CastView id={movieId} />}
          />
          <Route
            path={`${match.url}${Routes.reviews}`}
            render={() => <ReviewsView id={movieId} />}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsView;
