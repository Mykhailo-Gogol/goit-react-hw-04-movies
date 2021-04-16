import "./CastView.scss";
import { useState, useEffect } from "react";

import { MovieCredits } from "../../services/api";

const CastView = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    MovieCredits(id).then((data) => {
      setCast(data.cast);
    });
    console.log(id);
  }, []);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ name }) => (
            <li>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastView;
