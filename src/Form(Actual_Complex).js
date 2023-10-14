import React, { useState } from "react";
import "./Form(Actual_Complex).css";
const Real_Form = () => {
  const [form, setForm] = useState({// form is the state variable, and it's initialized with the object provided as the initial value. You can later use setForm to update this object by passing a new object with modified or different key-value pairs.
    fullname: "",
    password: "",
    email: "",
  });

  const updateSubmit = (e) => {
    e.preventDefault();
    alert("Form is submitted");
  };

  const updateForm = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.placeholder); //hamile ersari harek herna sakxau through event(object)

    //console.log(e.target);
    // const value = e.target.value;
    // const name = e.target.name;
    // console.log(e.target)
    const {value, name} = e.target; //mathi ko satta use garya i.e object destructuring
                              //esma e.target garda kheri value ra name ho vanera kasari thahapacuha vane esko naming le value vanne match vayo vayo value ma jane vae ani name lai ni so on

    setForm((preValue) => {
      console.log(preValue);

      return{
        ...preValue,
        [name]:value,
    }
    //   if (name === "fullnameLa") {
    //     return {
    //       fullname:value,
    //       password: preValue.password,
    //       email: preValue.email,
    //     };
    //   } else if (name === "passwordLa") {
    //     return {
    //       fullname: preValue.fullname,
    //       password:value,
    //       email: preValue.email,
    //     };
    //   } else if (name === "emailLa") {
    //     return {
    //       fullname: preValue.fullname,
    //       password: preValue.password,
    //       email:value,
    //     };
    //   } else if (name === "numberLa") {
    //     return {
    //       fullname: preValue.fullname,
    //       password: preValue.password,
    //       email: preValue.email,
    //       number:value,
    //     };
    //   }
     });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={updateSubmit}>
          <h1>Hello! Good Morning everyone I am {form.fullname}</h1>
          <h2>password:{form.password}</h2>
          <h2>Email:{form.email}</h2>
          <h2>Number:{form.number}</h2>
          <input
            type="text"
            placeholder="Enter the fullname "
            value={form.fullname}
            name="fullname"
            onChange={updateForm}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            name="password"
            onChange={updateForm}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            value={form.email}
            name="email"
            onChange={updateForm}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your number"
            value={form.number}
            name="number"
            onChange={updateForm}
          />
          <br />
          <button type="submit">Submit Form👌</button>
        </form>
      </div>
    </>
  );
};

export default Real_Form;
