import {
  // BrowserRouter,
  // Route,
  NavLink,
  // Switch,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import Routes from "../../routes/routes";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const posterWidth = { mobile: "w342", tablet: "w500", desktop: "w780" };

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  baseItem: {
    listStyle: "none",
    margin: 30,
  },
  baseParagraph: {
    overflow: "hidden",
    height: 100,
  },
  baseTitle: {
    fontSize: 20,
  },
  baseLink: {
    textDecoration: "none",
    color: "inherit",
  },
});

const MovieItem = ({
  id,
  original_title,
  overview,
  url,
  poster_path,
  location,
}) => {
  const classes = useStyles();

  return (
    <li className={classes.baseItem}>
      <Card className={classes.root}>
        <NavLink
          exact
          to={{
            pathname: `${url}movies/${id}`,
            state: {
              from: location,
            },
          }}
          className={classes.baseLink}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={original_title}
              height="140"
              image={`https://themoviedb.org/t/p/${posterWidth.mobile}${poster_path}`}
              title={original_title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.baseTitle}
              >
                {original_title ? original_title : "Unknow title"}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.baseParagraph}
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
            className={classes.baseLink}
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
