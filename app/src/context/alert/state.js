import React, {useReducer} from "react";
import AlertContext from "./context";
import AlertReducer from "./reducer";

import {
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const AlertState = props => {
  const initialState = {
    message: null,
    color: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  
  const showAlert = (message, color) => {
    dispatch({ type: SET_ALERT, message, color})
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT})
    }, 5000);
  };
  
  const { message, color } = state

  return (
    <AlertContext.Provider
      value={{
        message,
        color,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
