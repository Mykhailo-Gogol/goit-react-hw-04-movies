import "./HomeView.scss";
import { useLocation, withRouter } from "react-router-dom";

import MovieList from "../../components/MoviesList";
import { Trending } from "../../services/api";

const HomeView = ({ match }) => {
  const { pathname } = useLocation();
  return (
    <div className="home-view">
      <MovieList trending={Trending} url={match.path} pathname={pathname} />
    </div>
  );
};

export default withRouter(HomeView);
