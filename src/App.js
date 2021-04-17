import "./App.css";
import { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Routes from "./routes/routes";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsView = lazy(() =>
  import("./views/MovieDetailsView" /* webpackChunkName: "details-page" */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "404-page" */)
);

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
      <Suspense fallback={<h1>Loading....</h1>}>
        <Switch>
          <Route exact path={"/"} component={HomeView} />
          <Route path={"/movies/:movieId"} component={MovieDetailsView} />
          <Route path={"/movies"} component={MoviesView} />

          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
