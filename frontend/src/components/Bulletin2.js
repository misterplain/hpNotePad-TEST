import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import { fetchData } from "../actions/dashboardActions";

const Bulletin = () => {
  const dispatch = useDispatch();

  function formatDate(dateTest) {
    const year = dateTest.getFullYear();
    const month = String(dateTest.getMonth() + 1).padStart(2, "0");
    const day = String(dateTest.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const dashboardState = useSelector((state) => state.dashboard);
  const today = new Date();

  // moved to componentDidMount
  useEffect(() => {
    console.log(dashboardState)
    if (!dashboardState.loading && !dashboardState) {
      // dispatch(fetchData(dateString));
      dispatch(fetchData(formatDate(today)));
    }
  }, [dashboardState, dispatch, today]);

  console.log(formatDate(new Date(dashboardState.date)));
  console.log(dashboardState.date);

  const [displayedDate, setDisplayedDate] = useState(
    formatDate(new Date(dashboardState.date))
  );

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

  // added isPrevDateVisible
  const isPrevDateVisible = () => displayedDate !== formatDate(new Date());

  const getPrevDate = (displayedDate) => {
    const prevDate = new Date(displayedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setDisplayedDate(formatDate(prevDate));
    dispatch(fetchData(formatDate(prevDate)));
  };

  const getNextDate = () => {
    const nextDate = new Date(displayedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setDisplayedDate(formatDate(nextDate));
    dispatch(fetchData(formatDate(nextDate)));
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
    </Grid>
  );
};

export default Bulletin;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Box, Paper, Grid, Typography, Button } from "@mui/material";
// import { fetchData } from "../actions/dashboardActions";

// function formatDate(dateTest) {
//   const year = dateTest.getFullYear();
//   const month = String(dateTest.getMonth() + 1).padStart(2, "0");
//   const day = String(dateTest.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// const Bulletin = () => {
//   const dispatch = useDispatch();

//   const dashboardState = useSelector((state) => state.dashboard);
//   const today = new Date();

//   useEffect(() => {
//     console.log(dashboardState)
//     if (!dashboardState.loading && !dashboardState) {
//       // dispatch(fetchData(dateString));
//       dispatch(fetchData(formatDate(today)));

//     }
//   }, [dashboardState, dispatch, today]);

//   const [displayedDate, setDisplayedDate] = useState(formatDate(dashboardState.date));

//   function getPrevDate(displayedDate) {
//     const prevDate = new Date(displayedDate);
//     prevDate.setDate(prevDate.getDate() - 1);
//     setDisplayedDate(formatDate(prevDate));
//     dispatch(fetchData(formatDate(prevDate)));
//   }

//   function getNextDate() {
//     const nextDate = new Date(displayedDate);
//     nextDate.setDate(nextDate.getDate() + 1);
//     setDisplayedDate(formatDate(nextDate));
//     dispatch(fetchData(formatDate(nextDate)));
//   }

//   function parseDateFormat(dateString) {
//     const date = new Date(dateString);
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     return date.toLocaleDateString("en-US", options);
//   }

//   return (
//     <Grid container justifyContent='center' sx={{ marginTop: "25px" }}>
//       <Grid item xs={12} sm={10} md={8} marginBottom>
//         {" "}
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: "10px",
//           }}
//         >
//           <a
//             href='https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing'
//             target='__blank'
//             style={{ textDecoration: "none" }}
//           >
//             <Button
//               variant='contained'
//               color='secondary'
//               sx={{ textDecoration: "none" }}
//             >
//               DOA/Change of Mind Extension Timeline
//             </Button>
//           </a>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Button onClick={() => getPrevDate(displayedDate)}>
//           PREVIOUS DATE
//         </Button>
//         <Typography>{parseDateFormat(displayedDate)}</Typography>
//         {/* <Typography>{dashboardState?.dashboardData[0].date}</Typography> */}
//         {/* write a function so that the below button will be displayed only if the displayedDate is yesterday or before */}
//         {displayedDate === formatDate(new Date()) ? null : (
//           <Button onClick={() => getNextDate(displayedDate)}>NEXT DATE</Button>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default Bulletin;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Box, Paper, Grid, Typography, Button } from "@mui/material";
// import { fetchData } from "../actions/dashboardActions";

// const Bulletin = () => {
//   const dispatch = useDispatch();

//   const dashboardState = useSelector((state) => state.dashboard);
//   console.log("dashboardState", dashboardState);

//   function formatDate(dateTest) {
//     const year = dateTest.getFullYear();
//     const month = String(dateTest.getMonth() + 1).padStart(2, "0");
//     const day = String(dateTest.getDate()).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   }

//   const today = new Date();
//   const [displayedDate, setDisplayedDate] = useState(formatDate(today));

//   function getPrevDate(displayedDate) {
//     const prevDate = new Date(displayedDate);
//     prevDate.setDate(prevDate.getDate() - 1);
//     setDisplayedDate(formatDate(prevDate));
//     dispatch(fetchData(formatDate(prevDate)));
//   }

//   function getNextDate() {
//     const nextDate = new Date(displayedDate);
//     nextDate.setDate(nextDate.getDate() + 1);
//     setDisplayedDate(formatDate(nextDate));
//     dispatch(fetchData(formatDate(nextDate)));
//   }

//   function parseDateFormat(dateString) {
//     const date = new Date(dateString);
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     return date.toLocaleDateString("en-US", options);
//   }

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     if (Object.keys(dashboardState).length === 0) {
//   //       dispatch(fetchData(formatDate(today)));
//   //     }
//   //     setTimeout(() => {
//   //       console.log("dashboardState", dashboardState);
//   //       const date = new Date(dashboardState.dashboardData[0].date);
//   //       if (date.getDate() !== today.getDate()) {
//   //         dispatch(fetchData(formatDate(today)));
//   //       }
//   //     }, 1000);
//   //   }, 1000);
//   // }, [dashboardState, dispatch]);

//   useEffect(() => {
//     // if (Object.keys(dashboardState).length === 0) {
//     //   console.log("triggered from having nothing in object at all")
//     //   dispatch(fetchData(formatDate(today)));
//     // } else if (Object.keys(dashboardState).length > 0 && !dashboardState.loading) {
//     //   console.log("triggered from having something in object")
//     //   dispatch(fetchData(formatDate(today)));
//     //   const date = new Date(dashboardState.dashboardData[0].date);
//     //   if (date.getDate() !== today.getDate()) {
//     //     dispatch(fetchData(formatDate(today)));
//     //   }
//     //   console.log("dashboardState", dashboardState);
//     // }
//     dispatch(fetchData(formatDate(today)));
//   }, [dashboardState, dispatch, today]);

//   // const {dateState} = dashboardState.dashboardData[0].date.toString()
//   // console.log(dateState)

//   return (
//     <Grid container justifyContent='center' sx={{ marginTop: "25px" }}>
//       <Grid item xs={12} sm={10} md={8} marginBottom>
//         {" "}
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: "10px",
//           }}
//         >
//           <a
//             href='https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing'
//             target='__blank'
//             style={{ textDecoration: "none" }}
//           >
//             <Button
//               variant='contained'
//               color='secondary'
//               sx={{ textDecoration: "none" }}
//             >
//               DOA/Change of Mind Extension Timeline
//             </Button>
//           </a>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Button onClick={() => getPrevDate(displayedDate)}>
//           PREVIOUS DATE
//         </Button>
//         <Typography>{parseDateFormat(displayedDate)}</Typography>
//         {/* write a function so that the below button will be displayed only if the displayedDate is yesterday or before */}
//         {displayedDate === formatDate(new Date()) ? null : (
//           <Button onClick={() => getNextDate(displayedDate)}>NEXT DATE</Button>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default Bulletin;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Box, Paper, Grid, Typography, Button } from "@mui/material";
// import {
//   fetchData,
//   nextDateState,
//   prevDateState,
// } from "../actions/dashboardActions";

// const Bulletin = () => {
//   const dispatch = useDispatch();

//   const today = new Date();
//   const [displayedDate, setDisplayedDate] = useState(formatDate(today));

//   //turn date into string in format YYYY-MM-DD
//   function formatDate(dateTest) {
//     const year = dateTest.getFullYear();
//     const month = String(dateTest.getMonth() + 1).padStart(2, "0");
//     const day = String(dateTest.getDate()).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   }

//   const dashboardState = useSelector((state) => state.dashboard.dashboardData);
//   console.log("dashboardState", dashboardState);

//   useEffect(() => {
//     if (!dashboardState) {
//       // dispatch(fetchData(dateString));
//       dispatch(fetchData(formatDate(today)));
//       setDisplayedDate(formatDate(today));
//     }
//   }, [dashboardState, dispatch]);

//   // const stateDate = dashboardState[0]?.date;
//   // const stateDateFormatted = formatDate(new Date(stateDate.toString()));

//   // console.log("stateDate", stateDate);
//   // console.log("stateDateFormatted", stateDateFormatted);

//   function getPrevDate(displayedDate) {
//     const prevDate = new Date(displayedDate);
//     prevDate.setDate(prevDate.getDate() - 1);
//     setDisplayedDate(formatDate(prevDate));
//     dispatch(fetchData(formatDate(prevDate)));
//   }

//   function getNextDate(displayedDate) {
//     const nextDate = new Date(displayedDate);
//     nextDate.setDate(nextDate.getDate() + 1);
//     setDisplayedDate(formatDate(nextDate));
//     dispatch(fetchData(formatDate(nextDate)));
//   }

//   function parseDateFormat(dateString) {
//     const date = new Date(dateString);
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     return date.toLocaleDateString("en-US", options);
//   }

//   return (
//     <Grid container justifyContent='center' sx={{ marginTop: "25px" }}>
//       <Grid item xs={12} sm={10} md={8} marginBottom>
//         {" "}
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: "10px",
//           }}
//         >
//           <a
//             href='https://docs.google.com/spreadsheets/d/18jm6P70TQOF6WZvY_TfGw3a0CKxvfZigiV73o9GPlKs/edit?usp=sharing'
//             target='__blank'
//             style={{ textDecoration: "none" }}
//           >
//             <Button
//               variant='contained'
//               color='secondary'
//               sx={{ textDecoration: "none" }}
//             >
//               DOA/Change of Mind Extension Timeline
//             </Button>
//           </a>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Button
//           onClick={() => {
//             getPrevDate(displayedDate);
//             // dispatch(nextDateState());
//           }}
//         >
//           PREVIOUS DATE
//         </Button>
//         <Typography>{parseDateFormat(displayedDate)}</Typography>
//         {/* write a function so that the below button will be displayed only if the displayedDate is yesterday or before */}
//         {displayedDate === formatDate(today) ? null : (
//           <Button
//             onClick={() => {
//               getNextDate(displayedDate);
//               // dispatch(prevDateState());
//             }}
//           >
//             NEXT DATE
//           </Button>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default Bulletin;
