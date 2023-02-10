import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/dashboardConstants";

export const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { loading: true };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        today: action.payload,
        yesterday: action.payload,
        twoDaysAgo: action.payload,
        threeDaysAgo: action.payload,
        fourDaysAgo: action.payload,
        fiveDaysAgo: action.payload,
        sixDaysAgo: action.payload,
        sevenDaysAgo: action.payload,
        eightDaysAgo: action.payload,
        nineDaysAgo: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
