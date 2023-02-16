import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  NEXT_DATE, 
  PREV_DATE
} from "../constants/dashboardConstants";

const today = new Date();

function formatDate(dateTest) {
    const year = dateTest.getFullYear();
    const month = String(dateTest.getMonth() + 1).padStart(2, "0");
    const day = String(dateTest.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

// export const dashboardReducer = (state = {date: `${formatDate(today)}`}, action) => {
  export const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { loading: true };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        dashboardData: action.payload[0],
        date: formatDate(new Date(action.payload[0].date)),
      };
    case FETCH_DATA_FAILURE:
      return { loading: false, error: action.payload };
    case NEXT_DATE:
      return {
        loading: false,
        date: new Date(state.date).setDate(new Date(state.date).getDate() + 1)
      };
    case PREV_DATE:
      return {
        loading: false,
        date: new Date(state.date).setDate(new Date(state.date).getDate() - 1)
      };
    default:
      return state;
  }
};
