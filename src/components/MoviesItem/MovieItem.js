import "./MovieItem.scss";
import { NavLink } from "react-router-dom";
import PosterWidth from "../../utils/PosterWidth";
import defaultImage from "../../images/default-image.jpeg";

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
  query,
  pathname,
}) => {
  return (
    <li className="baseItem">
      <Card className="root">
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: pathname,
              query,
            },
            search: `search=${query}`,
          }}
          className="baseLink"
        >
          <CardActionArea>
            <CardMedia
              className="media"
              component="img"
              alt={original_title}
              height="140"
              image={
                poster_path
                  ? `https://themoviedb.org/t/p/${PosterWidth.mobile}${poster_path}`
                  : defaultImage
              }
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
              pathname: `${url}/${id}`,
              state: {
                from: pathname,
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
