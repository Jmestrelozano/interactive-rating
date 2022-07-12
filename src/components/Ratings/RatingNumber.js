import React, { useEffect, useState } from "react";
import "../../styles/componentsStyles/ratingNumber.css";

export const RatingNumber = () => {
  const [ratingNumber, setRatingNumber] = useState([]);

  const drawRatingNumber = () => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(i);
    }
    setRatingNumber(arr);
  };

  useEffect(() => {
    drawRatingNumber();
  }, []);

  const RenderRating = () => {
    return (
      <>
        {ratingNumber.map((rtN, index) => {
          return (
            <button className="circle-star" key={index}>
              <p className="number">{rtN}</p>
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="container-ratings">
      <RenderRating />
    </div>
  );
};
