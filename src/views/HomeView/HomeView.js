import "./HomeView.scss";
import { withRouter } from "react-router-dom";

import MovieList from "../../components/MoviesList";
import { Trending } from "../../services/api";

const HomeView = ({ match, location }) => {
  return (
    <div className="home-view">
      <MovieList trending={Trending} url={match.url} location={location} />
    </div>
  );
};

export default withRouter(HomeView);
