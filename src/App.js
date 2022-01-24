import React, { useState } from "react";
import "./App.css";
import UserBio from "./component/UserBio";
import UserInput from "./component/UserInput";

function App() {
  const [viewdetails, setViewDetails] = useState(false);
  const collectInfo = () => {
    setViewDetails(true);
  };
  const [user, setUser] = useState({
    username: "",
    offname: "",
    profession: "",
    email: "",
    city: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value})
};

  return (
    <div className="App">
      {viewdetails === false ? <UserInput collectInfo={collectInfo}  handleInput={handleInput} user={user} setUser={setUser} /> : " "}
      {viewdetails ? <UserBio user={user}/> : " "}
    </div>
  );
}

export default App;
