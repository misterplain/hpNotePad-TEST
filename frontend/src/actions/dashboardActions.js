import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/dashboardConstants";
import axios from "../api/axios";

export const fetchData = (date) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });


    const { data } = await axios.get(`/data/${date}`);
    console.log(data);
    


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
