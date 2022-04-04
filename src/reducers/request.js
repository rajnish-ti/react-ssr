import { FETCH_REQUEST_QUERY } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST_QUERY:
      console.log('fetched request', action)
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
