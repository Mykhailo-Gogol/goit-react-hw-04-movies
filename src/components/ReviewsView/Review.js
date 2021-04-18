import { review_item, review_list } from "./Review.module.scss";
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

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {results.length > 0 ? (
        <ul className={review_list}>
          {results.map(
            ({ author, content, created_at, production_companies }) => (
              <li key={author} className={review_item}>
                <h3 style={{ color: getRandomColor() }}>{author}</h3>
                <p>{content}</p>
                <p>{created_at.slice(0, 10)}</p>
              </li>
            )
          )}
        </ul>
      ) : (
        "We don't have reviews on this film."
      )}
    </div>
  );
};

export default ReviewsView;
