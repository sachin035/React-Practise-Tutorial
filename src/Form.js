import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  let state = useState();
  let [name, setName] = useState();
  let [clickButton, setClickbutton] = useState();
  const updateName = (e) => {
    console.log(e); //check what's coming in event
    console.log(e.target.value); //check in console
    setName(e.target.value);
  };

  const handleEvent = () => {
    setClickbutton(name);
  };
  return (
    <>
      <div>
        <h1>Hello {name}</h1>
        <input
          type="text"
          placeholder="Enter your name:"
          //   value="" //here "" aba input field ma chai k type grya tyo dekhaudaina
          //esto garda kheri euta matra updated string dekhaunu koo reason chai hamile e.target.value ko value="" i.e empty xani ta ani hareko time onchange huda pahila ko string store hudaina value ma tehi vaera ho
          //value={name} //esto garda kheri value ma harek updated string basxa so
          value=''
          onChange={(e) => {
            updateName(e);
          }}
        />
        <button onClick={handleEvent}>click me 👍</button>
        <h2>
          Click the Click me button and everything you type appear here 🤣🤣 :
          {clickButton}
        </h2>
      </div>
    </>
  );
};

export default Form;
