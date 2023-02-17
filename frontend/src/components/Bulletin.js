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
import { Link } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);

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

    setIsLoading(false);
  }, [dashboardState, dispatch, displayedDate, today]);

  //swipable
  const [activeStep, setActiveStep] = useState(0);
  // const maxSteps = dashboardData.news.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container justifyContent='center' sx={{ marginTop: "25px" }} spacing={1}>
      <Grid item xs={12} sm={12} md={12} marginBottom>
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

        {displayedDate === formatDate(new Date()) ? null : (
          <Button onClick={() => getNextDate(displayedDate)}>NEXT DATE</Button>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
     
        style={{ height: "250px", border: "1px solid blue" }}
      >
        forecast
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={5}

        style={{ height: "250px", border: "1px solid blue" }}
      >
        horoscope
      </Grid>
            <Grid
        item
        xs={12}
        sm={10}
        md={10}
 
        style={{ height: "100px", border: "1px solid blue" }}
      >
        joke
      </Grid>
      {dashboardData?.news && (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            boxShadow: "13px 13px 45px #adacac, -13px -13px 45px #ffffff",

            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            border: "none",
          }}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={5000}
            sx={{ boxShadow: "none" }}
          >
            {dashboardData.news &&
              dashboardData?.news.map((step, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  key={step._id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: { xs: "column", md: "row" },
                    border: "none",
                    borderRadius: "15px",
                    width: "100%",
                  }}
                >
                  {Math.abs(activeStep - index) <= 1 ? (
                    <>
                      <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                          marginBottom: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <Box
                          component='img'
                          sx={{
                            width: "100%",
                            height: "auto",
                            boxShadow: "none",
                            marginTop: { xs: "none", md: "15px" },
                            padding: "none",
                            marginLeft: { xs: "none", md: "30px" },
                            borderRadius: "20px",
                          }}
                          src={step.image}
                          alt={step.body}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        {" "}
                        <Card
                          sx={{
                            boxShadow: {
                              xs: "none",
                              md: "30px 30px 45px #adacac, -30px -30px 45px #ffffff",
                            },
                            borderRadius: "20px",
                            marginRight: { xs: "none", md: "30px" },
                            width: "100%",
                            margin: "none",
                            padding: "none",
                          }}
                        >
                          <CardContent>
                            <Typography variant='h5' color='purple'>
                              {step.title}
                            </Typography>
                            <Typography variant='body' component='div'>
                              {step.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <a
                              href={step.url}
                              target='_blank'
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                style={{}}
                              >
                                Learn More
                              </Button>{" "}
                            </a>
                          </CardActions>
                        </Card>
                      </Grid>
                    </>
                  ) : null}
                </Grid>
              ))}
          </AutoPlaySwipeableViews>
          <Grid item xs={12}>
            {" "}
            <MobileStepper
              steps={dashboardData.news.length}
              position='static'
              activeStep={activeStep}
              sx={{ width: "80%", margin: "0 auto" }}
              nextButton={
                <Button
                  size='small'
                  onClick={handleNext}
                  disabled={activeStep === dashboardData.news.length - 1}
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
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Bulletin;

// {dashboardData?.news && (
//   <Grid
//     item
//     xs={10}
//     sx={{
//       paddingTop: "20px",
//       boxShadow: "13px 13px 45px #adacac, -13px -13px 45px #ffffff",
//       backgroundColor: "#faf9f9",
//       borderRadius: "32px",
//     }}
//   >
//     <Box sx={{}}>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//         interval={5000}
//         containerStyle={{
//           display: "flex",
//           alignItems: "center",
//           flexDirection: "row",
//           maxWidth: "100%",
//         }}
//       >
//         {dashboardData.news &&
//           dashboardData?.news.map((step, index) => (
//             <div key={step._id}>
//               {Math.abs(activeStep - index) <= 1 ? (
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Box
//                     component='img'
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",

//                       width: "55%",

//                       minHeight: "100%",

//                       borderRadius: "15px",
//                     }}
//                     src={step.image}
//                     alt={step.body}
//                   />
//                   <Card
//                     sx={{
//                       width: "35%",
//                       borderRadius: "0px",
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant='h5'
//                         color='purple'
//                         gutterBottom
//                       >
//                         {step.title}
//                       </Typography>
//                       <Typography variant='body' component='div'>
//                         {step.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions>
//                       <a
//                         href={step.url}
//                         target='_blank'
//                         style={{ textDecoration: "none" }}
//                       >
//                         {" "}
//                         <Button
//                           type='submit'
//                           variant='contained'
//                           color='secondary'
//                           style={{ marginRight: "20px" }}
//                         >
//                           Learn More
//                         </Button>{" "}
//                       </a>
//                     </CardActions>
//                   </Card>
//                 </div>
//               ) : null}
//             </div>
//           ))}
//       </AutoPlaySwipeableViews>

//       {/* </div> */}
//       <MobileStepper
//         steps={dashboardData.news.length}
//         position='static'
//         activeStep={activeStep}
//         sx={{ width: "40%", margin: "0 auto" }}
//         nextButton={
//           <Button
//             size='small'
//             onClick={handleNext}
//             disabled={activeStep === dashboardData.news.length - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button
//             size='small'
//             onClick={handleBack}
//             disabled={activeStep === 0}
//           >
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   </Grid>
// )}
