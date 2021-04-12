import { useState, useEffect } from "react";
import { movieById } from "../services/api.js";

const posterWidth = { mobile: "w342", tablet: "w500", desktop: "w780" };

const MovieDetailsView = ({ match }) => {
  const { movieId } = match.params;
  const [currentMovie, setCurrentMovie] = useState({});
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    movieById(movieId).then((res) => {
      setCurrentMovie(res);
      setPosterPath(res.poster_path);
    });
  }, [movieId]);

  return (
    <div>
      {currentMovie.title && <h1>This is my movie {currentMovie.title}</h1>}
      {posterPath && (
        <img
          src={`https://themoviedb.org/t/p/${posterWidth.mobile}${posterPath}`}
          alt={currentMovie.title}
        />
      )}
    </div>
  );
};

export default MovieDetailsView;
