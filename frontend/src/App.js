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
import {
  getJoke,
  getMoonPhase,
  getDailyHoroscope,
  getForecastSummary,
  getWordOfTheDay, getBingNews
} from "./components/apiTesting";

//hash router is not for the browser it's for the server

const date = new Date();
const time = date.toLocaleTimeString();

function App() {


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
