import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "../../image/user-profile.png";
import { getMovies, getShows } from "../../redux/movies/movieAction";
import "./header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() === "") {
      alert("Enter valid movie/show name");
    } else {
      dispatch(getMovies(searchValue));
      dispatch(getShows(searchValue));
      setSearchValue("");
    }
  };
  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="logo">
        Movie App
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Movies or Shows"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
