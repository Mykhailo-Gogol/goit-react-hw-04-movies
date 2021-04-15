import "./CastView.scss";
import { useState, useEffect } from "react";

import { MovieCredits } from "../../services/api";

const CastView = ({ id }) => {
  const [cast, setCast] = useState({});
  useEffect(() => {
    console.log(id);
    MovieCredits(id).then((res) => setCast(res));
  }, [id]);
  return (
    <div>
      <h1> Cast View</h1>
    </div>
  );
};

export default CastView;
