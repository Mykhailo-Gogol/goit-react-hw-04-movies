import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Routes from "./routes/routes";

import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import MovieDetailsView from "./views/MovieDetailsView";
import NotFoundView from "./views/NotFoundView";

const App = () => {
  return (
    <>
      <div className="Header">
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
            to={Routes.movieByQuery}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </nav>
      </div>

      <Switch>
        <Route exact path={Routes.home} component={HomeView} />
        <Route path={Routes.movieDetails} component={MovieDetailsView} />
        <Route path={Routes.movieByQuery} component={MoviesView} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
