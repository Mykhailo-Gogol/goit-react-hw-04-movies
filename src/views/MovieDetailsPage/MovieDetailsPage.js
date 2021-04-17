import "./MovieDetailsPage.scss";
import { useState, useEffect } from "react";
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";

// Api
import { MovieDetailsById } from "../../services/api.js";

// Utils
import routes from "../../routes/routes";
import poster_width from "../../utils/poster_width";
import placeholder_image from "../../images/default_image.jpeg";

// Comp
import CastView from "../../components/CastView/CastView";
import ReviewsView from "../../components/ReviewsView/Review";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const { push } = useHistory();
  const { state } = useLocation();

  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    MovieDetailsById(movieId).then((res) => {
      setCurrentMovieDetails(res);
      setPosterPath(res.poster_path);
    });
  }, [movieId]);

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
    push({
      pathname: state?.from || routes.home,
      state: state,
    });
  };

  return (
    <div className="movie_details_page">
      <button type="button" className="go_back_button" onClick={handleGoBack}>
        Back
      </button>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "30px" }}>
          <img
            src={
              posterPath
                ? `https://themoviedb.org/t/p/${poster_width.mobile}${posterPath}`
                : placeholder_image
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
      <div className="additional_info_nav">
        <h2>Additional information</h2>
        <NavLink
          to={`${url}${routes.cast}`}
          className="additional_nav_link"
          activeClassName="additional_nav_link--active"
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}${routes.reviews}`}
          className="additional_nav_link"
          activeClassName="additional_nav_link--active"
        >
          Reviews
        </NavLink>
      </div>
      <div className="additionalInfo">
        <Route
          path={`${path}${routes.cast}`}
          render={() => <CastView id={movieId} />}
        />
        <Route
          path={`${path}${routes.reviews}`}
          render={() => <ReviewsView id={movieId} />}
        />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
