const Data = require("../models/dataModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");

const getJoke = async () => {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  // try {
  //   const response = axios.request(options);
  //   return response.data.body
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    let response = await axios.request(options);
    if (response.status >= 200 && response.status < 300) {
      // console.log("success");
      const joke = {
        setup: response.data.body[0].setup,
        punchline: response.data.body[0].punchline,
      };
      return joke;
    } else {
      // console.log("success");
      return errorMessage;
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};

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

const getHoroscope = async (signHS) => {
  const options = {
    method: "POST",
    url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    params: { sign: `${signHS}`, day: "today" },
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };
  // const errorMessage = "Error in fetching data";
  try {
    let response = await axios.request(options);
    if (response.status >= 200 && response.status < 300) {
      console.log("success");
      return response.data.description;
    } else {
      console.log("success");
      return errorMessage;
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};

// function gatherData(newData) {
//   let objectGathered = {};
//   let time = new Date();
//   objectGathered.date = time;
//   objectGathered.newData = newData;
//   console.log(objectGathered + "objectGathered");
//   return objectGathered;
// }

// @desc    fetch data
// @route   get /api/data
// @access  Public
const fetchData = asyncHandler(async (req, res) => {
  let time = new Date();
  let fetchedDataObject = {};
  fetchedDataObject.date = time;
  fetchedDataObject.horoscope = {};
  const horoscopeData = {};

  setTimeout(async () => {
    ///first API call - joke
    fetchedDataObject.joke = await getJoke();
    setTimeout(async () => {
      // second API call - horoscopes
      const horoscopeSigns = [
        "aquarius",
        "pisces",
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
      ];
      {
        horoscopeSigns.map((sign) => {
          setTimeout(async () => {
            getHoroscope(sign)
              .then((data) => {
                console.log(data);
                horoscopeData[sign] = data;
                fetchedDataObject.horoscope = horoscopeData;
                console.log("fetchedData".horoscope);
              })
              .catch((error) => {
                console.log(error);
              });
          }, 3000); // delay of 3 seconds
        });
      }
      setTimeout(async () => {
        console.log("intermission");
        setTimeout(async () => {
          saveDataToDB(fetchedDataObject);
          setTimeout(async () => {
            console.log("fetchedData");
            setTimeout(async () => {
              console.log("fetchedData");
              setTimeout(async () => {
                console.log("fetchedData");
                setTimeout(async () => {
                  console.log("fetchedData");
                  setTimeout(async () => {
                    console.log("fetchedData");
                    setTimeout(async () => {
                      console.log("fetchedData");
                      setTimeout(async () => {
                        console.log("fetchedData");
                      }, 3000);
                    }, 3000);
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000); // delay of 3 seconds
    }, 3000); // delay of 3 seconds
  }, 3000); // delay of 3 seconds
});

const saveDataToDB = async (objectToSave, req, res) => {
  let time = new Date();

  const newData = new Data({
    date: time,
    horoscope: objectToSave.horoscope,
    joke: {
      setup: objectToSave.setup,
      punchline: objectToSave.punchline,
    },
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
