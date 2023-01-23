import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Bulletin from "./components/Bulletin";
import Holidays from "./components/Holidays";
import Ebay from "./components/Ebay";
import Templates from "./components/Templates";
import Contact from "./components/Contact";
import Container from "@mui/material/Container";
import Tools from "./components/Tools";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./api/axios";

//hash router is not for the browser it's for the server

const date = new Date();
const time = date.toLocaleTimeString();
// const hour = date.getHours();
// const minutes = date.getMinutes().toString();
// const seconds = date.getSeconds().toString();
// console.log(minutes);
// console.log(typeof minutes);
console.log(time);
// console.log(hour)
// console.log(time);

// const test1 = async () => {
//   try {
//     let data = {
//       name: "name test1 08:05:00 PM",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test2 = async () => {
//   try {
//     let data = {
//       name: "name test2 7:20:00 PM",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test3 = async () => {
//   try {
//     let data = {
//       name: "name test3 07:55:00 PM or 19:55:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test4 = async () => {
//   try {
//     let data = {
//       name: "name test4 '7:20:00 PM or 19:00:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test5 = async () => {
//   try {
//     let data = {
//       name: "name test5 ' 20:05:00",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test6 = async () => {
//   try {
//     let data = {
//       name: "name test6 every minute",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const test7 = async () => {
//   try {
//     let data = {
//       name: "name test6 every half hour at 30 or top of hour",
//       message: "message test 1 ",
//     };
//     // setBool(true);
//     const res = await axios.post("/contact", data);
//     if (data.message.length === 0) {
//       console.log(res.data.message);
//       // setBool(false);
//     } else if (res.status === 200) {
//       console.log(res.data.message);
//       // setBool(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// if (time === '6:47:00 PM' || "18:47:00") {
//   console.log('activated')
//   test1();
// }

// if (time === "08:05:00 PM") {
//   console.log("activated");
//   test1();
// }

// if (time === "7:35:00 PM") {
//   console.log("activated");
//   test2();

// if (time === "11:20:00 PM" || time === "23:20:00") {
//   console.log("active");
//   test3();
// }

// if (time === "7:35:00 PM" || "19:35:00") {
//   console.log("activated");
//   test4();
// }

// if (time === "20:05:00") {
//   console.log("activated");
//   test5();
// }

// if (time === '18:37:00') {
//   console.log('activated')
//   test();
// }

// if (minutes === "30" || minutes === "00") {
//   console.log("activated");
//   test7();
// }

//node-cron to post to console once per minute

// let intervalId;

// function scheduleAPIRequest() {
//   // Get the current time
//   const now = new Date();

//   // Set the time for the next scheduled API request (9:30 am)
//   const scheduledTime = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate(),
//     9,
//     30,
//     0
//   );

//   // If the scheduled time is in the past, set it for the next day
//   if (scheduledTime < now) {
//     scheduledTime.setDate(scheduledTime.getDate() + 1);
//   }

//   // Get the time remaining until the next scheduled API request
//   const timeUntilScheduledRequest = scheduledTime - now;
//   console.log(timeUntilScheduledRequest);

//   // Clear any existing interval
//   clearInterval(intervalId);

//   // Set the interval to make the API request
//   intervalId = setInterval(() => {
//     // make API request
//     console.log("API Request Made");
//     try {
//       let data = {
//         name: "name test scheduled 9:30am",
//         message: "message test 1 ",
//       };
//       // setBool(true);
//       const res = axios.post("/contact", data);
//       if (data.message.length === 0) {
//         console.log(res.data.message);
//         // setBool(false);
//       } else if (res.status === 200) {
//         console.log(res.data.message);
//         // setBool(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, timeUntilScheduledRequest);
// }

// // Call the scheduleAPIRequest function to schedule the first request
// scheduleAPIRequest();

function App() {
  // const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     test6();

  //   }, 60000);
  //   return () => clearInterval(interval);

  // }, []);
  return (
    <>
      <HashRouter>
        {" "}
        <Header />
        {/* {timer} */}
        <Container>
          <Routes>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/' element={<Bulletin />} />
            <Route path='/holidays' element={<Holidays />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/ebay' element={<Ebay />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>
        <section>
          <Outlet></Outlet>
        </section>{" "}
      </HashRouter>
    </>
  );
}

export default App;
