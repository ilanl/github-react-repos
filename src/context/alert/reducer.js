import {
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        message: action.message,
        color: action.color
      };
    case REMOVE_ALERT:
      return {
        ...state,
        message: null,
        color: null
      };
    default:
      return state;
  }
};
