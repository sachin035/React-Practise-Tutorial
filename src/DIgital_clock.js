import React, { useState } from "react";

const DIgital_clock = () => {
  let newTime = new Date().toLocaleTimeString();

  let state = useState(); //here state are in array having variable and function i.e useState gives array.
  console.log(state); //see
  let [currentTime, setCurrenttime] = useState(newTime);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCurrenttime(newTime);
  };

  setInterval(updateTime, 1000); //here updateTIme is a callback function and it is trigger after every 1 sec i.e 1000

  return (
    <>
      <p>{currentTime}</p>
    </>
  );
};

export default DIgital_clock;
