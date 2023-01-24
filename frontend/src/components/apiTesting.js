import axios from "axios";

export const getJoke = () => {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      //setup
      console.log(response.data.body[0].setup);
      //punchline
      console.log(response.data.body[0].punchline);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getMoonPhase = () => {
  const options = {
    method: "GET",
    url: "https://moon-phase.p.rapidapi.com/moon_phase/",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "moon-phase.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getDailyHoroscope = () => {
  const options = {
    method: "POST",
    url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    params: { sign: "aquarius", day: "today" },
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getForecastSummary = () => {
  const options = {
    method: "GET",
    url: "https://forecast9.p.rapidapi.com/rapidapi/forecast/Barcelona/summary/",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getWordOfTheDay = () => {
  const options = {
    method: "GET",
    url: "https://word-of-the-day2.p.rapidapi.com/word/today",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "word-of-the-day2.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getBingNews = () => {
    
}
