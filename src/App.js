import "./App.css";
import Routes from "./routes/routes";

import {
  // BrowserRouter,
  Route,
  NavLink,
  Switch,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import MoviesView from "./views/MoviesView/MoviesView";
import MovieDetailsView from "./views/MovieDetailsView/MovieDetailsView";
import NotFoundView from "./views/NotFoundView/NotFoundView";

function App() {
  return (
    <>
      <nav className="Nav">
        <NavLink
          exact
          to={Routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to={Routes.moviebyQuery}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </nav>

      <Switch>
        <Route exact path={Routes.home} component={HomeView} />
        <Route path={Routes.movieDetails} component={MovieDetailsView} />
        <Route path={Routes.moviebyQuery} component={MoviesView} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
}

export default App;
