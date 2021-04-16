import "./Review.scss";
import { useState, useEffect } from "react";
import { MovieReviews } from "../../services/api";

const ReviewsView = ({ id }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    MovieReviews(id).then((data) => {
      setResults(data.results);
    });
    console.log(id);
  }, []);
  return (
    <div>
      {results && (
        <ul>
          {results.map(({ author, content, created_at }) => (
            <li>
              <h3>{author}</h3>
              <p>{content}</p>
              <p>{created_at.slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsView;
