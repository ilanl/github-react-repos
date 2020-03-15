import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from "./context";
import GithubReducer from "./reducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: null,
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  // Get User
  // Get Repos
  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        users: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
