import React, { useEffect } from "react";
import MovieListing from "../../components/movieListing/movieListing";
import { useDispatch } from "react-redux";
import { getMovies, getShows } from "../../redux/movies/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const movie = "Harry";
  const show = "Friends";
  useEffect(() => {
    dispatch(getMovies(movie));
    dispatch(getShows(show));
  }, [dispatch]);
  return <MovieListing />;
};

export default Home;
