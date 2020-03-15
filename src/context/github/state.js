import React, {useReducer} from "react";
import GithubContext from "./context";
import GithubReducer from "./reducer";
import api from "../../api";

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
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading(true);
    const users = await api.searchUsers(text);
    dispatch({type: SEARCH_USERS, users});
  };

  // Get User
  const getUser = async userName => {
    setLoading(true);
    const [user, repos] = await Promise.all([
      api.getUser(userName),
      api.getUserRepos(userName)
    ]);
    dispatch({type: GET_USER, user});
    dispatch({type: GET_REPOS, repos});
  };

  const clearUsers = () => {
    dispatch({type: CLEAR_USERS});
  };

  const setLoading = () => {
    dispatch({type: SET_LOADING});
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        setLoading,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
