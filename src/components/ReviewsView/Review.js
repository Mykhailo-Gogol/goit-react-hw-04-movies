import "./Review.scss";
import { useState, useEffect } from "react";

// Api
import { MovieReviews } from "../../services/api";

const ReviewsView = ({ id }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    MovieReviews(id).then((data) => {
      setResults(data.results);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {results.length > 0 ? (
        <ul>
          {results.map(({ author, content, created_at }) => (
            <li key={author}>
              <h3>{author}</h3>
              <p>{content}</p>
              <p>{created_at.slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have reviews on this film."
      )}
    </div>
  );
};

export default ReviewsView;
