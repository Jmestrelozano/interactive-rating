import React, { useState } from "react";
import { CardAnswer } from "./components/Card/CardAnswer";
import { CardRating } from "./components/Card/CardRating";
import "./styles/styles.css";

function App() {
  const [numSelected, setNumSelected] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (num) => setNumSelected(num);

  const handleNextView = (bool) => setIsSuccess(bool);
  return (
    <div className="App">
      <div className="Container">
        {!isSuccess ? (
          <CardRating
            handleChange={handleChange}
            numSelected={numSelected}
            handleNextView={handleNextView}
          />
        ) : (
          <CardAnswer numSelected={numSelected} />
        )}
      </div>
    </div>
  );
}

export default App;
