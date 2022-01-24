import React from "react";
import "./UserBio.css";
import img from "./location.png";
import mailicon from "./email.png";
function UserBio(props) {
  return (
    <div className="userBio">
      <h1 style={{ color: "#C50707" }} className="name">
       {props.user.offname}
      </h1>
      <div className="bio">
        <div className="connection">
          <span className="userfollowers">
            <strong>0</strong> followers{" "}
          </span>
          <span className="userquickbooks">
            <strong>0</strong> quickbooks
          </span>
        </div>
        <div className="userdetails">
          <span className="biousername">@{props.user.username} </span>
          <span className="userlocation">
            <img src={img} alt=".." className="img_location"/>
           {props.user.city}
          </span>
        </div>
        <div className="biouseremail">
          <span>
            <img src={mailicon} alt=".." className="img_mail" /> {props.user.email}
          </span>
        </div>
      </div>
      <button className="btn2">See Quickbooks</button>
      <div className="tagsforprofession">#{props.user.profession}</div>
    </div>
  );
}

export default UserBio;
