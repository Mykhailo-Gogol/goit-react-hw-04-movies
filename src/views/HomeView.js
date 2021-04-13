import { Component } from "react";
import { trending } from "../services/api";
import MovieList from "../components/MoviesList";

class HomeView extends Component {
  render() {
    return (
      <div>
        <MovieList trending={trending} url={this.props.match.url} />
      </div>
    );
  }
}

export default HomeView;
