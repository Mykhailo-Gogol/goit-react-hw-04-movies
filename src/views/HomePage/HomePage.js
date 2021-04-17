import "./HomePage.scss";
import { useLocation, useRouteMatch } from "react-router-dom";

// Comp
import MovieList from "../../components/MoviesList";

const HomePage = () => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  return (
    <div className="home-view">
      <MovieList url={path} pathname={pathname} />
    </div>
  );
};

export default HomePage;
