// Common
import "./CastView.scss";
import { useState, useEffect } from "react";

// Api
import { MovieCredits } from "../../services/api";

// Utils
import defaultImage from "../../images/default-image.jpeg";
import poster_width from "../../utils/poster_width";

const CastView = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    MovieCredits(id).then(({ cast }) => {
      setCast(cast);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ name, profile_path }) => (
            <li key={name}>
              <img
                src={
                  profile_path
                    ? `https://themoviedb.org/t/p/${poster_width.mobile}${profile_path}`
                    : defaultImage
                }
                alt={name}
                className="castImage"
              />
              <p>Name: {name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastView;
