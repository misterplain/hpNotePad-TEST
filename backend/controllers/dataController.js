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

//third api call - moonphase
const getMoonPhase = async () => {
  const options = {
    method: "GET",
    url: "https://moon-phase.p.rapidapi.com/moon_phase/",
    headers: {
      //gmail key
      // "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      //yahoo key
      "X-RapidAPI-Key": "6055e6d211mshaddfa5288b1aaffp1a1b1ajsnbc9b8ca2a7a6",
      "X-RapidAPI-Host": "moon-phase.p.rapidapi.com",
    },
  };

  try {
    let response = await axios.request(options);
    if (response.status >= 200 && response.status < 300) {
      console.log("success");
      const moonphaseData = {
        mainText: response.data.mainText,
        emoji: response.data.emoji,
      };
      return moonphaseData;
    } else {
      console.log("success");
      return errorMessage;
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};

//fourt api call - weather
const getForecast = async () => {
  const options = {
    method: "GET",
    url: "https://forecast9.p.rapidapi.com/rapidapi/forecast/Barcelona/summary/",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
    },
  };

  try {
    let response = await axios.request(options);
    if (response.status >= 200 && response.status < 300) {
      console.log("success");
      const items = response.data.forecast.items;
      const extractedData = items.slice(0, 10).map((item) => ({
        date: item.date,
        min: item.temperature.min,
        max: item.temperature.max,
      }));

      return extractedData;
    } else {
      console.log("success");
      return errorMessage;
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};

const getNews = async () => {
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
    params: {
      q: "spain",
      pageNumber: "1",
      pageSize: "10",
      autoCorrect: "true",
      fromPublishedDate: "null",
      toPublishedDate: "null",
    },
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  try {
    let response = await axios.request(options);
    if (response.status >= 200 && response.status < 300) {
      console.log("success");
      const items = response.data.value;
      const extractedData = items.slice(0, 5).map((item) => ({
        // date: item.date,
        // min: item.temperature.min,
        // max: item.temperature.max,
        title: item.title,
        url: item.url,
        description: item.description,
        body: item.body,
        snippet: item.snippet,
        image: item.image.url,
      }));

      return extractedData;
    } else {
      console.log("success");
      return errorMessage;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

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
        //third api call - moon phase
        fetchedDataObject.moonPhase = await getMoonPhase();
        setTimeout(async () => {
          //fourth api call - weather
          fetchedDataObject.forecast = await getForecast();
          setTimeout(async () => {
            //fifth API call - get news
            fetchedDataObject.news = await getNews();
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
                        saveDataToDB(fetchedDataObject);
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
  console.log(objectToSave + "objectToSave from within saveDataToDB");

  const newData = new Data({
    date: time,
    horoscope: objectToSave.horoscope,
    joke: objectToSave.joke,
    moonPhase: objectToSave.moonPhase,
    forecast: objectToSave.forecast,
    news: objectToSave.news,
  });
  console.log(newData + "newData from within saveDataToDB");
  newData.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("saved to db");
    }
  });
  // .then((result) => {
  //   console.log("note saved!");
  // });

  console.log(objectToSave + "objectToSave from within saveDataToDB");
};

// @desc    fetch data
// @route   get /api/data
// @access  Public

const getDataByDate = asyncHandler(async (req, res) => {
  try {
    const dateToFind = req.params.date;
    const startOfDay = new Date(dateToFind);
    const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000 - 1);

    const data = await Data.find({
      date: { $gte: startOfDay, $lte: endOfDay },
    }).exec();
    if (data && data.length > 0) {
      res.json(data);
    } else {
      console.log("no data for this date");
      res.status(404).json({ message: "No data for this date" }).end();
    }
  } catch (error) {
    // console.error(ERROR getting data for date: ${date});
    console.log(error);
    res.status(500).end();
  }
});

module.exports = { fetchData, getDataByDate };
