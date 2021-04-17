import "./CastView.scss";
import { useState, useEffect } from "react";

import { MovieCredits } from "../../services/api";
import PosterWidth from "../../utils/PosterWidth";
import defaultImage from "../../images/default-image.jpeg";

const CastView = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    MovieCredits(id).then((data) => {
      setCast(data.cast);
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
                    ? `https://themoviedb.org/t/p/${PosterWidth.mobile}${profile_path}`
                    : defaultImage
                }
                alt={name}
                className="CastImage"
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
