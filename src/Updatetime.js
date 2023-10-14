import React, { useState } from "react";

const Updatetime = () => {
  let newTime = new Date().toLocaleTimeString();
  let state = useState();
  console.log(state);

  //Array destructuring gareko hai tyo useSate le chai aba array dinxa
  let [currentTime, updateCurrtime] = useState(newTime);
  const handleTime = () => {
    let newTime = new Date().toLocaleTimeString(); //have to reassign it .
    updateCurrtime(newTime);
  };

  return (
    <>
      <p>{currentTime}</p>
      <button onClick={handleTime}>Click me</button>
    </>
  );
};

export default Updatetime;
