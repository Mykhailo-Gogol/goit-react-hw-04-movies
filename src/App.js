import "./App.css";
import { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

// Utils
import routes from "./routes/routes";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "details-page" */)
);
const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage" /* webpackChunkName: "404-page" */)
);

const App = () => {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <NavLink
            exact
            to={routes.home}
            className="navLink"
            activeClassName="navLink--active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={routes.movieByQuery}
            className="navLink"
            activeClassName="navLink--active"
          >
            Movies
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
