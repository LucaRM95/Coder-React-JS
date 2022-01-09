import React from "react";
import '../../assets/css/spinner.css';

const Spinner = () => (
  <div className="spinner-container">
    <svg className="spinner" width="150" height="150" viewBox="0 0 100 100">
      <circle className="background" r="24" cx="50" cy="50"></circle>
      <path
        className="line"
        d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"
      ></path>
    </svg>
  </div>
)

export default Spinner;