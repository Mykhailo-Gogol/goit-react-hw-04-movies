import { withRouter } from "react-router-dom";

import MovieList from "../../components/MoviesList";
import { trending } from "../../services/api";

const HomeView = ({ match, location }) => {
  return (
    <div>
      <MovieList trending={trending} url={match.url} location={location} />
    </div>
  );
};

export default withRouter(HomeView);
