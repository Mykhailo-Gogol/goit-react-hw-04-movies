import "./MovieItem.scss";
import { NavLink } from "react-router-dom";
import PosterWidth from "../../utils/PosterWidth";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const MovieItem = ({
  id,
  original_title,
  overview,
  url,
  poster_path,
  location,
}) => {
  return (
    <li className="baseItem">
      <Card className="root">
        <NavLink
          exact
          to={{
            pathname: `${url}movies/${id}`,
            state: {
              from: location,
            },
          }}
          className="baseLink"
        >
          <CardActionArea>
            <CardMedia
              className="media"
              component="img"
              alt={original_title}
              height="140"
              image={`https://themoviedb.org/t/p/${PosterWidth.mobile}${poster_path}`}
              title={original_title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="baseTitle"
              >
                {original_title ? original_title : "Unknow title"}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="baseParagraph"
              >
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
        <CardActions>
          <NavLink
            exact
            to={{
              pathname: `${url}movies/${id}`,
              state: {
                from: location,
              },
            }}
            className="baseLink"
          >
            <Button size="small" color="primary">
              Learn More
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </li>
  );
};

export default MovieItem;
