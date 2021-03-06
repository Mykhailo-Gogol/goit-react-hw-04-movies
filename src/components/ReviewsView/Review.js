import {
  review_item,
  review_list,
  no_reviews,
  no_reviews_title,
} from "./Review.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Api
import { MovieReviews } from "../../services/api";

const ReviewsView = () => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MovieReviews(movieId)
      .then((data) => {
        setResults(data.results);
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
      {results.length > 0 ? (
        <ul className={review_list}>
          {results.slice(0, 2).map(({ author, content, created_at }) => (
            <li key={author} className={review_item}>
              <h3>{author}</h3>
              <p>{content}</p>
              <p>{created_at.slice(0, 10)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={no_reviews}>
          <h2 className={no_reviews_title}>
            "We don't have reviews on this film."
          </h2>
        </div>
      )}
    </div>
  );
};

export default ReviewsView;
