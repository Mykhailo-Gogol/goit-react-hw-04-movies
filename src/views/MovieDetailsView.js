import { useEffect } from "react";
import { movieById } from "../services/api.js";

const MovieDetailsView = ({ match }) => {
  const { movieId } = match.params;

  useEffect(() => {
    movieById(movieId).then((res) => console.log(res));
  }, [movieId]);
  return <div>This is my movie {movieId}</div>;
};

export default MovieDetailsView;
