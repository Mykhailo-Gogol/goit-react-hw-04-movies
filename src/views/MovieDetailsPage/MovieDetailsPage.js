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

// Material
//

// Api
import { MovieDetailsById } from "../../services/api.js";

// Utils
import routes from "../../routes/routes";
import poster_width from "../../utils/poster_width";
import placeholder_image from "../../images/default_image.jpeg";

// Comp
import CastView from "../../components/CastView/";
import ReviewsView from "../../components/ReviewsView/";
import VideoView from "../../components/VideoView/";

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
    production_companies,
  } = currentMovieDetails;

  const shouldDetailesRender =
    original_title &&
    release_date &&
    vote_average &&
    overview &&
    genres.length > 0 &&
    production_companies.length > 0;

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
      <div className="movie_details_main">
        <div className="image_container">
          <NavLink
            to={`${url}${routes.video}`}
            className="video_link_image"
            activeClassName="Video_link_image--active"
          >
            <img
              src={
                posterPath
                  ? `https://themoviedb.org/t/p/${poster_width.mobile}${posterPath}`
                  : placeholder_image
              }
              alt={original_title}
              className={"movie_details_image"}
            />
          </NavLink>
        </div>
        {shouldDetailesRender && (
          <div className="details_container">
            <h1>{original_title}</h1>
            <p>Release date: {release_date.slice(0, 4)}</p>
            <p>User Score {`${vote_average * 10} %`}</p>
            <h2>Overview</h2>
            <p style={{ width: "500px" }}>{overview}</p>
            <h2>Genres</h2>
            <ul className="genres_list">
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h2>Production</h2>
            <ul className="companies_list">
              {production_companies
                .filter(({ logo_path }) => logo_path)
                .map(({ id, logo_path, name }) => (
                  <li key={id} className="company_item">
                    <img
                      src={`https://themoviedb.org/t/p/${poster_width.mobile}${logo_path}`}
                      alt={name}
                      className="company_logo"
                    />
                  </li>
                ))}
            </ul>
          </div>
        )}
        <Route
          path={`${path}${routes.video}`}
          render={() => <VideoView id={movieId} />}
        />
      </div>
      <div className="additional_info_nav">
        {/* <h2 className="additional_info_title">Additional information</h2> */}
        <NavLink
          to={`${url}${routes.cast}`}
          className="additional_nav_link cast_link"
          activeClassName="additional_nav_link--active"
        >
          Cast
        </NavLink>

        <NavLink
          to={`${url}${routes.reviews}`}
          className="additional_nav_link reviews_link"
          activeClassName="additional_nav_link--active"
        >
          Reviews
        </NavLink>
        <NavLink
          to={`${url}${routes.video}`}
          className="additional_nav_link video_link"
          activeClassName="additional_nav_link--active"
        >
          Watch Trailer
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
