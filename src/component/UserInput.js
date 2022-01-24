import React, { useState } from "react";
import "./UserInput.css";
function UserInput(props) {
 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    props.collectInfo();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="userInput">
        <div className="username">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={props.user.username}
            onChange={props.handleInput}
            required
          />
        </div>
        <div className="profession">
          <label>Primary Profession</label>
          <input
            type="text"
            name="profession"
            id="profession"
            placeholder="What do you do"
            value={props.user.profession}
            onChange={props.handleInput}
            required
          />
        </div>
        <div className="offname">
          <label>Name</label>
          <input
            type="text"
            name="offname"
            id="offname"
            placeholder="Your official name"
            value={props.user.offname}
            onChange={props.handleInput}
            required
          />
        </div>
        <div className="city">
          <label>Primary City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Where do you belong"
            value={props.user.city}
            onChange={props.handleInput}
            required
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="How to contact"
            value={props.user.email}
            onChange={props.handleInput}
            required
          />
        </div>
        <div className="zip-code">
          <label>Zip Code</label>
          <input
            type="text"
            name="zip-code"
            id="zip-code"
            placeholder="To get best results"
          />
        </div>
      </div>
      <button className="btn1">LET'S GO</button>
    </form>
  );
}

export default UserInput;
