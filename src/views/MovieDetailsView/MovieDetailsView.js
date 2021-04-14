import "./MovieDetailsView.scss";
import { useState, useEffect } from "react";

import Routes from "../../routes/routes";
import PosterWidth from "../../utils/PosterWidth";
import { MovieDetailsById } from "../../services/api.js";

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
        Home
      </button>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "30px" }}>
          <img
            src={`https://themoviedb.org/t/p/${PosterWidth.mobile}${posterPath}`}
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
    </div>
  );
};

export default MovieDetailsView;
