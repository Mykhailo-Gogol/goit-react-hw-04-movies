import "./App.css";

import {
  // BrowserRouter,
  Route,
  NavLink,
  Switch,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";

import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView.js";
import MovieDetailsView from "./views/MovieDetailsView.js";
import NotFoundView from "./views/NotFoundView.js";

function App() {
  return (
    <>
      <nav className="Nav">
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Route path="/movies" component={MoviesView} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
}

export default App;
