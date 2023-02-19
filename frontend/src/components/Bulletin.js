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
  Modal,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, CustomTick, Label, Tick
} from "recharts";
import { Link } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { fetchData } from "../actions/dashboardActions";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "5px solid purple",
  // border: 'none',
  boxShadow: 24,
  p: 4,
};

// const data = [
//   { name: "Jan", high: 14, low: 0 },
//   { name: "Feb", high: 12, low: 2 },
//   { name: "Mar", high: 16, low: 3 },
//   { name: "Apr", high: 20, low: 8 },
//   { name: "May", high: 19, low: 4 },
//   { name: "Jun", high: 9, low: 2 },
//   { name: "Jul", high: 6, low: 9 },
// ];

const Bulletin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [horoscopeTitle, setHoroscopeTitle] = useState("");
  const [horoscopeContent, setHoroscopeContent] = useState("");
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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

  // forecast data
  const dataForecast = dashboardState?.dashboardData.forecast?.map((item, index) => ({
    keyItem: index,
    date: item.date, // replace "date" with the actual key name in the forecast object
    high: item.high, // replace "high" with the actual key name in the forecast object
    low: item.low, // replace "low" with the actual key name in the forecast object
  }));

  // console.log(dashboardState.dashboardData.forecast)
  console.log(dataForecast);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  //horoscope icons
  const horoscopeIcons = {
    aries: <TbZodiacAries />,
    taurus: <TbZodiacTaurus />,
    gemini: <TbZodiacGemini />,
    cancer: <TbZodiacCancer />,
    leo: <TbZodiacLeo />,
    virgo: <TbZodiacVirgo />,
    libra: <TbZodiacLibra />,
    scorpio: <TbZodiacScorpio />,
    sagittarius: <TbZodiacSagittarius />,
    capricorn: <TbZodiacCapricorn />,
    aquarius: <TbZodiacAquarius />,
    pisces: <TbZodiacPisces />,
  };

  return (
    <Grid
      container
      justifyContent='center'
      sx={{ marginTop: "25px" }}
      spacing={1}
    >
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
      {dashboardData?.forecast && (
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          style={{
            height: { xs: "500px", sm: "300px" },
            width: "100%",
            border: "1px solid blue",
          }}
        >
          <Grid item xs={12} sm={12} sx={{display: "flex", justifyContent: "center"}}>
            <LineChart width={325} height={275} data={dataForecast} style={{border: "1px solid red", padding: "0px"}}>
              <XAxis dataKey='date' interval={0}/>
              <YAxis  dataKey="high" label={{ value: "Temperature", angle: -90, position: "insideLeft" }}/>
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='high' stroke='#8884d8' />
              <Line type='monotone' dataKey='low'  stroke='#82ca9d' />
            </LineChart>
            {/* <LineChart width={600} height={300} data={dataForecast}>
  <XAxis dataKey="date" tick={<CustomTick />} />
  <YAxis>
    <Label value="Temperature" position="insideLeft" angle={-90} offset={10} />
    <Tick
      min={0}
      max={Math.ceil(Math.max(...dataForecast.map((d) => d.high)) / 5) * 5}
      interval="preserveStartEnd"
    />
  </YAxis>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="high" stroke="#8884d8" />
  <Line type="monotone" dataKey="low" stroke="#82ca9d" />
</LineChart> */}
          </Grid>
        </Grid>
      )}

      {dashboardData?.horoscope && (
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          sx={{
            height: { xs: "500px", sm: "300px" },
            border: "1px solid blue",
            padding: "0px",
            margin: "0px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.keys(dashboardData?.horoscope).map((sign, text) => (
            <>
              {" "}
              <Grid
                item
                xs={4}
                sm={3}
                sx={{
                  border: "1px solid green",
                  borderRadius: "10px",
                  boxShadow: " 8px 5px 8px -1px rgba(119,6,194,0.59);",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                  color: "purple",
                  // marginLeft: "none",
                  padding: "10px",
                  margin: "3px",
                }}
                onClick={() => {
                  console.log(dashboardData.horoscope[sign]);
                  setHoroscopeContent(dashboardData.horoscope[sign]);
                  setHoroscopeTitle(sign);
                  handleOpen();
                }}
              >
                {horoscopeIcons[sign]}
              </Grid>
            </>
          ))}
        </Grid>
      )}

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
          sm={10}
          md={10}
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
                            <Typography
                              variant='body'
                              component='div'
                              sx={{ display: { xs: "none" } }}
                            >
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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {horoscopeTitle}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {/* {dashboardData.horoscope[sign]} */}
            {horoscopeContent}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Bulletin;
