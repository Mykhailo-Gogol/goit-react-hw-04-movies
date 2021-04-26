import {
  movie_root,
  movie_media,
  movie_item,
  movie_paragraph,
  movie_title,
  movie_link,
} from "./MovieItem.module.scss";
import { NavLink, useLocation } from "react-router-dom";

// Material
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Utils
import poster_width from "../../utils/poster_width";
import defaultImage from "../../images/default_image.jpeg";

const MovieItem = ({ original_title, overview, poster_path, query, id }) => {
  const { pathname } = useLocation();

  return (
    <li className={movie_item}>
      <Card className={movie_root}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: pathname,
              query: query,
            },
            search: `search=${original_title.toLowerCase().replace(" ", "_")}`,
          }}
          className={movie_link}
        >
          <CardActionArea>
            <CardMedia
              className={movie_media}
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
                className={movie_title}
              >
                {original_title ? original_title : "Unknow title"}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={movie_paragraph}
              >
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
      </Card>
    </li>
  );
};

export default MovieItem;
