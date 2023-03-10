import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../image/user-profile.png";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="logo">
        Movie App
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
