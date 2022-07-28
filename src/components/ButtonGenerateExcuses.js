import React, { useState, useEffect } from "react";
import Data from "../data/data.json";
import ButtonCssForMessage from "../css/ButtonCssForMessage.css";
import Loader from "./Loader";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ButtonGenerateExcuses = () => {
  let length = Object.keys(Data).length;
  const [num, setNum] = useState(randomNumber(0, length - 1));
  const [loader, setLoader] = useState(true);


  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const timeToSearch = delay(randomNumber(1000, 5000));


  const handleClick = async (event) => {
    await timeToSearch;
    setNum(randomNumber(0, length - 1));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, timeToSearch);
  });

  return loader ? (
    <Loader />
  ) : (
    <>
      <div className="theMessage">{Data[num].message}</div>
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default ButtonGenerateExcuses;
