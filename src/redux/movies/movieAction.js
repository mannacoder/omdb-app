import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { addMovies, addShows, movieOrShowDetails } from "./movieSlice";

export const getMovies = (searchTerm) => {
  return async (dispatch) => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${searchTerm}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      // console.log(response);
      return response.data;
    };
    try {
      const movieData = await fetchMovies();
      dispatch(addMovies(movieData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getShows = (searchTerm) => {
  return async (dispatch) => {
    const fetchShows = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${searchTerm}&type=series`)
        .catch((err) => {
          console.log(err);
        });
      // console.log(response);
      return response.data;
    };
    try {
      const seriesData = await fetchShows();
      dispatch(addShows(seriesData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieOrShowsDetails = (id) => {
  return async (dispatch) => {
    const fetchMovieOrShowDetails = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        .catch((err) => {
          console.log(err);
        });
      // console.log(response);
      return response.data;
    };
    try {
      const movieOrShowDetailsData = await fetchMovieOrShowDetails();
      dispatch(movieOrShowDetails(movieOrShowDetailsData));
    } catch (error) {
      console.log(error);
    }
  };
};
