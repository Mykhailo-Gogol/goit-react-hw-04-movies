// Common
import {
  cast_image,
  cast_item,
  cast_list,
  cast_name,
} from "./CastView.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Api
import { MovieCredits } from "../../services/api";

// Utils
import defaultImage from "../../images/default_image.jpeg";
import poster_width from "../../utils/poster_width";

const CastView = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    MovieCredits(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .finally(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {cast && (
        <ul className={cast_list}>
          {cast
            .slice(0, 10)
            .filter(({ profile_path }) => profile_path)
            .map(({ name, profile_path }) => (
              <li key={name} className={cast_item}>
                <img
                  src={
                    profile_path
                      ? `https://themoviedb.org/t/p/${poster_width.mobile}${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                  className={cast_image}
                />
                <p className={cast_name}>{name}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CastView;
