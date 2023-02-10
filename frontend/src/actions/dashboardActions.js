import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants/dashboardConstants";
import { MongoClient } from "mongodb";

import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });

    //write a function to find todays date and pull that information as well as the last 9 days
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const fourDaysAgo = new Date(today);
    fourDaysAgo.setDate(fourDaysAgo.getDate() - 4);
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    const sixDaysAgo = new Date(today);
    sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const eightDaysAgo = new Date(today);
    eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);
    const nineDaysAgo = new Date(today);
    nineDaysAgo.setDate(nineDaysAgo.getDate() - 9);

    // Create a MongoDB client
    const client = new MongoClient(
      "mongodb://hpnotepad-test-api.onrender.com",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Connect to the client
    client.connect(() => {
      console.log("Connected to MongoDB");

    const results = client
        .db("my_database")
        .collection("my_collection")
        .find({
            date: {
                $gte: new Date(nineDaysAgo),
                $lt: new Date(today)
            }
        });


      // Handle the results
      results.then((r) => {
        const data = r.toArray();
        console.log(data)
        return data
      });

      // Disconnect from the client
      client.close();
    });

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
