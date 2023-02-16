import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import MobileStepper from "@mui/material/MobileStepper";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchData } from "../actions/dashboardActions";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Bulletin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  function formatDate(dateTest) {
    const year = dateTest.getFullYear();
    const month = String(dateTest.getMonth() + 1).padStart(2, "0");
    const day = String(dateTest.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const today = new Date();
  const [displayedDate, setDisplayedDate] = useState(formatDate(today));

  function getPrevDate(displayedDate) {
    const prevDate = new Date(displayedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setDisplayedDate(formatDate(prevDate));
    dispatch(fetchData(formatDate(prevDate)));
  }

  function getNextDate() {
    const nextDate = new Date(displayedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setDisplayedDate(formatDate(nextDate));
    dispatch(fetchData(formatDate(nextDate)));
  }

  function parseDateFormat(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData, loading, error } = dashboardState;

  useEffect(() => {
    if (Object.keys(dashboardState).length === 0) {
      dispatch(fetchData(formatDate(today)));
    }
    if (!dashboardState.loading && !dashboardState) {
      // dispatch(fetchData(dateString));
      dispatch(fetchData(formatDate(today)));
    }

    if (dashboardState.date && dashboardState.date !== displayedDate) {
      dispatch(fetchData(displayedDate));
    }
  }, [dashboardState, dispatch, displayedDate, today]);

  //swipable
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = dashboardData.news.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
      <Grid item xs={12}>
        <Button onClick={() => getPrevDate(displayedDate)}>
          PREVIOUS DATE
        </Button>
        <Typography>{parseDateFormat(displayedDate)}</Typography>
        {/* write a function so that the below button will be displayed only if the displayedDate is yesterday or before */}
        {displayedDate === formatDate(new Date()) ? null : (
          <Button onClick={() => getNextDate(displayedDate)}>NEXT DATE</Button>
        )}
      </Grid>
      <Grid item xs={12}>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography>{dashboardState.error}</Typography>}
        {dashboardData?.joke ? (
          <>
            <Typography>{dashboardData.joke.setup}</Typography>
            <Typography>{dashboardData.joke.punchline}</Typography>
          </>
        ) : (
          <Typography>
            joke failed to load, please alert patrick ASAP!!!
          </Typography>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box sx={{ maxWidth: 400, flexGrow: 1 }}> */}
        <Box>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 80,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{dashboardData?.news[activeStep].title}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            transitionDuration={5}
          >
            {dashboardData?.news.map((step, index) => (
              <div key={step._id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component='img'
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.image}
                    alt={step.body}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
      {/* <Grid
        item
        xs={12}
        md={4}
        sx={{ border: "1px solid purple", height: "300px" }}
      >
        forecast
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ border: "1px solid green", height: "300px" }}
      >
        horoscrope
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ border: "1px solid blue", height: "300px" }}
      >
        joke
      </Grid> */}
    </Grid>
  );
};

export default Bulletin;
