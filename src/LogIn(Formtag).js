//this is not actual applicable .just an practise about form
// why to use form tag - The <form> tag allows you to manage and submit a collection of related input values as a single unit.
//It provides a way to group related input elements together and manage their submission as a unit. When you submit a <form>, the browser sends a request to the server, including all the form data.
//It simplifies the process of collecting user input and sending it to the server. also for validation.
//can attach an onSubmit event handler to the form, which gives you control over what happens when the user submits the form, such as performing actions like sending data to a server or triggering client-side logic.

import React, { useState } from "react";

const LogIn = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [name_pw, setName_PW] = useState();

  const updateFullname = (e) => {
    setName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateSubmit = (e) => {
    e.preventDefault();
    setName_PW(` I am ${name} 😊 &  my password is: ${password}`);
  };

  return (
    <>
      <div>
        <form onSubmit={updateSubmit}>
          <h1> Hello! Good Morning everyone{name_pw}</h1>

          <input
            type="text"
            placeholder="Enter the fullname"
            value={name}
            onChange={updateFullname}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={updatePassword}
          />
          <br />
          <button type="Submit">Submit Form👌</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
