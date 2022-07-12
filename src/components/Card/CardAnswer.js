import React from "react";
import { CardContainer } from "./CardContainer";
import "../../styles/componentsStyles/cardAnswer.css";

export const CardAnswer = ({ numSelected }) => {
  return (
    <CardContainer>
      <div className="icon-container-answer">
        <img src={process.env.PUBLIC_URL + "/assets/illustration-thank-you.svg"} alt="answer" />
      </div>

      <div className="container-qualification">
        <p>{`You selected ${numSelected} out of 5`}</p>
      </div>

      <div className="card-body-answer">
        <h2 className="title">Thank you!</h2>

        <p className="text">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t
          hesitate to get in touch!
        </p>
      </div>
    </CardContainer>
  );
};
