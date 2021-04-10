const MovieDetailsView = ({ match }) => {
  return <div>This is my movie {match.params.movieId}</div>;
};

export default MovieDetailsView;
