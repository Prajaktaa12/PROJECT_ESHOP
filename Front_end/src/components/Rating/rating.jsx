import React, { useState } from "react";
import "./rating.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(5);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              className="rating"
              value="ratingValue"
              onClick={() => setRating(ratingValue)}
            />
            <i
              className="fa fa-star"
              style={
                ratingValue <= (hover || rating)
                  ? { color: "#ffc107" }
                  : { color: "#858381" }
              }
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            ></i>
          </label>
        );
      })}
      {/* <p>this is rating {rating}</p> */}
    </div>
  );
};

export default StarRating;
