import { Component } from "react";
import { trending } from "../services/api";
import MovieList from "../components/MoviesList";
import { withRouter } from "react-router-dom";

class HomeView extends Component {
  render() {
    return (
      <div>
        <MovieList
          trending={trending}
          url={this.props.match.url}
          location={this.props.location}
        />
      </div>
    );
  }
}

export default withRouter(HomeView);
