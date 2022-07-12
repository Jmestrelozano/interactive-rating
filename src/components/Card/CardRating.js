import React from "react";
import "../../styles/componentsStyles/card.css";
import { RatingNumber } from "../Ratings/RatingNumber";

export const CardRating = () => {
  return (
    <div className="card-container">
      <div className="icon-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-star.svg"}
          className="circle-star"
          alt="star"
        />
      </div>
      <div className="card-body">
        <h2 className="title">How did we do?</h2>

        <p className="text">
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>

        <RatingNumber />

        <button className="button-send">submit</button>
      </div>
    </div>
  );
};