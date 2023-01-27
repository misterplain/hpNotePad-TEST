const Data = require("../models/dataModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");

// const getJoke = () => {
//   const options = {
//     method: "GET",
//     url: "https://dad-jokes.p.rapidapi.com/random/joke",
//     headers: {
//       "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
//       "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = axios.request(options);
//     return response.data.body
//   } catch (error) {
//     console.log(error);
//   }
// };

// // @desc    fetch data
// // @route   get /api/data
// // @access  Public
// const fetchData = asyncHandler(async (req, res) => {
//   let date = new Date();
//   const object = {};

//   console.log(object);

//   setTimeout(async () => {
//     object.joke = await getJoke();
//     setTimeout(async () => {
//       console.log(object);
//       setTimeout(async () => {
//         console.log(object.joke.data.body[0]?.setup);
//         console.log(object.joke.data.body[0]?.punchline);
//         saveDataToDB(object);
//       }, 10000); // delay of 3 seconds
//     }, 10000); // delay of 3 seconds
//   }, 10000); // delay of 3 seconds

// });

// const saveDataToDB = async (passedFromCall, req, res) => {
// let time = new Date();

// const newData = await Data.create({
//   date: time,
//   joke: {
//     setup:  passedFromCall.joke.data.body[0].setup.toString(),
//     punchline: passedFromCall.joke.data.body[0].punchline.toString(),
//   },
// });
// await newData.save();

// };

//refactoried with an API that produces 1000 requests per day

const getHoroscope = async () => {
  const options = {
    method: "POST",
    url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    params: { sign: "gemini", day: "today" },
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };

  try {
    let response = await axios.request(options);
    let horoscopeData = response.data;
    // gatherData( data);
    return horoscopeData;
  } catch (error) {
    console.log(error);
  }
};

function gatherData(newData) {
  let objectGathered = {};
  let time = new Date();
  objectGathered.date = time;
  objectGathered.newData = newData;
  console.log(objectGathered + "objectGathered");
  return objectGathered;
}

// @desc    fetch data
// @route   get /api/data
// @access  Public
const fetchData = asyncHandler(async (req, res) => {
  let time = new Date();
  let fetchedDataObject = {};
  fetchedDataObject.date = time;

  setTimeout(async () => {
    let horoscopeData = await getHoroscope();
    setTimeout(async () => {
      console.log(
        horoscopeData.description +
          "horoscope after 10 seconds after first call"
      );
      setTimeout(async () => {
        fetchedDataObject.horoscope = horoscopeData.description;
        saveDataToDB(fetchedDataObject);
      }, 3000); // delay of 3 seconds
    }, 3000); // delay of 3 seconds
  }, 3000); // delay of 3 seconds
});

const saveDataToDB = async (objectToSave, req, res) => {
  let time = new Date();

  const newData = new Data({
    date: time,
    horoscope: objectToSave.horoscope,
  });
  newData
    .save((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("saved to db");
      }
    })
    // .then((result) => {
    //   console.log("note saved!");
    // });

  console.log(objectToSave + "objectToSave from within saveDataToDB");
};

module.exports = { fetchData };
