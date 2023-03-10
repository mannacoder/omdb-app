import React, { useEffect } from "react";
import MovieListing from "../../components/movieListing/movieListing";
import { useDispatch } from "react-redux";
import { getMovies, getShows } from "../../redux/movies/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getShows());
  }, [dispatch]);
  return <MovieListing />;
};

export default Home;
