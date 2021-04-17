import "./HomePage.scss";
import { useLocation, withRouter } from "react-router-dom";

// Comp
import MovieList from "../../components/MoviesList";

const HomePage = ({ match }) => {
  const { pathname } = useLocation();
  return (
    <div className="home-view">
      <MovieList url={match.path} pathname={pathname} />
    </div>
  );
};

export default withRouter(HomePage);
// export default withRouter(HomePage);
