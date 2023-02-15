import React, { useEffect, useInteral } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import {fetchData} from "../actions/dashboardActions";




const Bulletin = () => {

  const  dashboardData  = useSelector((state) => state.dashboardData);
  console.log(dashboardData)
  const dispatch = useDispatch();
  const date = new Date();
  //turn current date into string in format 2023-01-01
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  

  useEffect(() => {

    console.log(dateString)
    if (!dashboardData) {
      // dispatch(fetchData(dateString));
      dispatch(fetchData("2023-2-13"));
    }
  })


  return (
    <Grid container justifyContent='center' sx={{ marginTop: "25px" }}>
      <Grid item xs={12} sm={10} md={8} marginBottom>
        {" "}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <a
            href='https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing'
            target='__blank'
            style={{ textDecoration: "none" }}
          >
            <Button
              variant='contained'
              color='secondary'
              sx={{ textDecoration: "none" }}
            >
              DOA/Change of Mind Extension Timeline
            </Button>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bulletin;
