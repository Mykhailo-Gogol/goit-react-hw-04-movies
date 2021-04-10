import React, { Component } from "react";
import MovieList from "../components/MovieList";
import { trending } from "../services/api";

class MoviesView extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <MovieList trending={trending} />
      </div>
    );
  }
}

export default MoviesView;
