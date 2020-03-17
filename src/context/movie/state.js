import React, {useReducer} from "react";
import MovieContext from "./context";
import MovieReducer from "./reducer";
import * as api from "../../api/api.movie";

import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  SET_ALERT
} from "../types";

const MovieState = props => {
  const initialState = {
    movies: [],
    movie: {}, // Full Movie
    loading: false
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Movies by Keywords
  const searchMovies = async text => {
    setLoading(true);
    const movies = await api.searchMovies(text);
    dispatch({type: SEARCH_MOVIES, movies});
  };
  
  // Get Movie By Id
  const getMovieById = async id => {
    setLoading(true);
    const movie = await api.getMovieById(id);
    dispatch({type: GET_MOVIE, movie});
  };

  const clearMovies = () => {
    dispatch({type: CLEAR_MOVIES});
  };

  const setLoading = () => {
    dispatch({type: SET_LOADING});
  };

  console.log({...state});

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        setLoading,
        searchMovies,
        getMovieById,
        clearMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
