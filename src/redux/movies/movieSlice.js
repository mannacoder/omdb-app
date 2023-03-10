import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShowDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
    movieOrShowDetails: (state, { payload }) => {
      state.selectedMovieOrShowDetails = payload;
    },
    //useeffect cleanup function
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShowDetails = {};
    },
  },
});

export const {
  addMovies,
  addShows,
  movieOrShowDetails,
  removeSelectedMovieOrShow,
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetails = (state) =>
  state.movies.selectedMovieOrShowDetails;
export default movieSlice.reducer;
