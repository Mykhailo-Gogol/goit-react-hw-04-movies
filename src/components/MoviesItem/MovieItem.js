import "./MovieItem.scss";
import { NavLink, useLocation } from "react-router-dom";

// Material
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Utils
import poster_width from "../../utils/poster_width";
import defaultImage from "../../images/default-image.jpeg";

const MovieItem = ({ original_title, overview, poster_path, query, id }) => {
  const { pathname } = useLocation();

  return (
    <li className="movieItem">
      <Card className="movieRoot">
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: pathname,
              query,
            },
            search: `search=${query}`,
          }}
          className="movieLink"
        >
          <CardActionArea>
            <CardMedia
              className="movieMedia"
              component="img"
              alt={original_title}
              height="140"
              image={
                poster_path
                  ? `https://themoviedb.org/t/p/${poster_width.mobile}${poster_path}`
                  : defaultImage
              }
              title={original_title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="movieTitle"
              >
                {original_title ? original_title : "Unknow title"}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="movieParagraph"
              >
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default MovieItem;
