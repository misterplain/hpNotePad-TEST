const Data = require("../models/logModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");

// @desc    fetch data
// @route   get /api/data
// @access  Public
const fetchData = asyncHandler(async (req, res) => {
  let date = new Date();

  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  async function fetchJokeAPI() {
    let jokeData;
    try {
      const response = await axios.request(options);
      const setup = response.data.body[0].setup;
      const punchline = response.data.body[0].punchline;
      jokeData = { setup, punchline };
      console.log(jokeData);
      return jokeData;
    } catch (error) {
      console.log(error);
    }
  }

  fetchJokeAPI()

  //will need to give above function time to run before it can be used

});

module.exports = { fetchData };
