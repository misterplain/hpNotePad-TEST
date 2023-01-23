import React, { useEffect, useInteral } from "react";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import axios from "axios";

// const getJokes = async () => {
//   const options = {
//     method: "GET",
//     url: "https://dad-jokes.p.rapidapi.com/random/joke",
//     headers: {
//       "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
//       "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//     },
//   };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
//   try{
//     const response = await axios.request(options);
//   } catch (error){
//     console.error(error);
//   }
//   return response;
// };

// const definition = axios.get(
//   "https://dictionaryapi.com/api/v3/references/spanish/json/casa?key=1e88a7a7-11de-4a9e-9084-e8bee2132241"
// );
// console.log(definition + "definition");

// const fetchDefinition = async () => {
//   const data = await axios
//     .get(
//       "https://dictionaryapi.com/api/v3/references/spanish/json/portatil?key=1e88a7a7-11de-4a9e-9084-e8bee2132241"
//     )
//     .then((response) => {
//       console.log(response.data);
//     }).catch((error) => {
//       console.error(error);
//     });
//   console.log(response + "definition");
// };

const Bulletin = () => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log('This will run every second!');
  //     getJokes();
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  // fetchDefinition();

  // const date = new Date();
  // const time = date.toLocaleTimeString();
  // console.log(time)

  // if(time === "5:00:00 PM"){
  //   console.log("time is 5:00 PM")
  // }

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
