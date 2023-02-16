import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
    NEXT_DATE,
    PREV_DATE
} from "../constants/dashboardConstants";
import axios from "../api/axios";



export const fetchData = (date) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });

    const { data } = await axios.get(`/data/${date}`)

    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const nextDateState = () => (dispatch) => {
  dispatch({ type: NEXT_DATE });
};

export const prevDateState = () => (dispatch) => {
  dispatch({ type: PREV_DATE });
};
