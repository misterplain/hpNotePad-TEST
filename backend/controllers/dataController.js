const Data = require("../models/logModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");

//how chatGBT says to do it
// Sure! Here's an example of a function that uses setTimeout() to stagger four API calls and store the results in a single object:

// Copy code
// const fetchAPI1 = async () => {
//   try {
//     const response = await axios.get('https://example.com/api1');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchAPI2 = async () => {
//   try {
//     const response = await axios.get('https://example.com/api2');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchAPI3 = async () => {
//   try {
//     const response = await axios.get('https://example.com/api3');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchAPI4 = async () => {
//   try {
//     const response = await axios.get('https://example.com/api4');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const saveDataToDB = data => {
//   // Code to save data to the database
//   //...
// };

// const gatherData = async () => {
//   const data = {};
//   data.data1 = await fetchAPI1();
//   setTimeout(async () => {
//     data.data2 = await fetchAPI2();
//     setTimeout(async () => {
//       data.data3 = await fetchAPI3();
//       setTimeout(async () => {
//         data.data4 = await fetchAPI4();
//         saveDataToDB(data);
//       }, 3000); // delay of 3 seconds
//     }, 3000); // delay of 3 seconds
//   }, 3000); // delay of 3 seconds
// };

// gatherData();

/////////////////////////////

// const getJoke = () => {
//   const options = {
//     method: "GET",
//     url: "https://dad-jokes.p.rapidapi.com/random/joke",
//     headers: {
//       "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
//       "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//     },
//   };

//   // axios
//   //   .request(options)
//   //   .then(function (response) {
//   //     //setup
//   //     console.log(response.data.body[0].setup);
//   //     //punchline
//   //     console.log(response.data.body[0].punchline);
//   //     console.log(response.data + "response from within getJoke")
//   //     return response
//   //   })
//   //   .catch(function (error) {
//   //     console.error(error);
//   //   });

//   try {
//     const response = axios.request(options);
//     console.log(response.data + "response from within getJoke");
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getJoke = async (req,res) => {
//   const options = {
//     method: "GET",
//     url: "https://dad-jokes.p.rapidapi.com/random/joke",
//     headers: {
//       "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
//       "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data + "response from within getJoke");
//     return response.status(200).json(response.data);
//   } catch (error) {
//     return error.status(400).json(error);
//     console.log(error);
//   }
// }

// const getJoke = () => {
//   const options = {
//     method: "GET",
//     url: "https://dad-jokes.p.rapidapi.com/random/joke",
//     headers: {
//       "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
//       "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//     },
//   };

// try{
//   const response = axios.request(options);
//   // console.log(response + "response from within getJoke");
//   return response;
// } catch (error) {
//   console.log(error);
// }
// };

const getJoke = () => {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     //setup
  //     // console.log(response.data.body[0].setup);
  //     // //punchline
  //     // console.log(response.data.body[0].punchline);
  //     // console.log(response.data.body[0].punchline)
  //     // const joke = {{response.data.body[0].punchline, response.data.body[0].setup}}
  //     const setup = response.data.body[0].setup;
  //     const punchline = response.data.body[0].punchline;
  //     console.log(setup, punchline);
  //     return {
  //       setup,
  //       punchline,
  //     };
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  try {
    const response = axios.request(options);
    // const setup = response.data.body[0].setup;
    // const punchline = response.data.body[0].punchline;
    const joke = response
    console.log(joke);
    return joke
    // return { setup, punchline };
  } catch (error) {
    console.log(error);
  }
};

// @desc    fetch data
// @route   get /api/data
// @access  Public
const fetchData = asyncHandler(async (req, res) => {
  // getJoke()
  let date = new Date();
  const object = {};

  console.log(object);

  setTimeout(async () => {
    object.joke = await getJoke();
    setTimeout(async () => {
      console.log(object);
      setTimeout(async () => {
        console.log(object.joke.data.body[0]?.setup);
        console.log(object.joke.data.body[0]?.punchline);
        saveDataToDB(object);
      }, 10000); // delay of 3 seconds
    }, 10000); // delay of 3 seconds
  }, 10000); // delay of 3 seconds


});

const saveDataToDB = async (passedFromCall, req, res) => {
// let object = {

// }
let time = new Date();

// object = {
//   date: time,
//   joke: {
//     setup: passedFromCall.joke.data.body[0].setup.toString(),
//     punchline: passedFromCall.joke.data.body[0].punchline.toString(),
//   }
// }
// console.log({object} + "object to save to database" )
// console.debug(object)

const newData = await Data.create({
  date: time,
  joke: {
    setup:  passedFromCall.joke.data.body[0].setup.toString(),
    punchline: passedFromCall.joke.data.body[0].punchline.toString(),
  },
});
await newData.save();

// if (newData) {
//   // Created
//   return res.status(201).json({ newData });
// } else {
//   return res.status(400).json({ message: "was not successful" });
// }

// console.log(newData)

//save object to database using mongoose and Data mdoel

};

module.exports = { fetchData };
