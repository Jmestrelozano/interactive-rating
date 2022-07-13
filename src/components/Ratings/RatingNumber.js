import React, { useEffect, useState } from "react";
import "../../styles/componentsStyles/ratingNumber.css";

export const RatingNumber = ({ handleChange, numSelected }) => {
  const [ratingNumber, setRatingNumber] = useState([]);
  // const [numSelected, setNumSelected] = useState(0);

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

  const RenderRating = ({ action }) => {
    return (
      <>
        {ratingNumber.map((rtN, index) => {
          return (
            <button
              onClick={() => action(rtN)}
              className={`circle-star number ${numSelected === rtN ? "selected" : ""}`}
              key={index}
            >
              {rtN}
            </button>
          );
        })}
      </>
    );
  };

  const handleToggleRating = (num) => {
    ratingNumber.filter((rtN) => rtN === num && handleChange(num));
  };

  return (
    <div className="container-ratings">
      <RenderRating action={handleToggleRating} />
    </div>
  );
};
