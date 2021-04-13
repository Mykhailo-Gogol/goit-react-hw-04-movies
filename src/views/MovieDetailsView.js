import { useState, useEffect } from "react";
import { movieDetailsById } from "../services/api.js";

const posterWidth = { mobile: "w342", tablet: "w500", desktop: "w780" };

const MovieDetailsView = ({ match }) => {
  const { movieId } = match.params;
  const [currentMovieDetails, setCurrentMovieDetails] = useState({});
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    movieDetailsById(movieId).then((res) => {
      setCurrentMovieDetails(res);
      setPosterPath(res.poster_path);
    });
  }, [movieId]);

  const {
    oiginal_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = currentMovieDetails ? currentMovieDetails : null;

  return (
    <div>
      {oiginal_title && <h1>This is my movie {oiginal_title}</h1>}
      {posterPath && (
        <img
          src={`https://themoviedb.org/t/p/${posterWidth.mobile}${posterPath}`}
          alt={oiginal_title}
        />
      )}
    </div>
  );
};

export default MovieDetailsView;
