import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieOrShowsDetails } from "../../redux/movies/movieAction";
import {
  getSelectedMovieOrShowDetails,
  removeSelectedMovieOrShow,
} from "../../redux/movies/movieSlice";
import "./movieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShowDetails);
  // console.log(data);
  //Here in useEffect we have to right a cleanup function because when we are clicking on any other movie then the detail of previous movie is visible for split of seconds then the other movie detail is loading.
  useEffect(() => {
    dispatch(getMovieOrShowsDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="left-section">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star" /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up" /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film" /> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar" /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
