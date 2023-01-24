const axios = require("axios");
const schedule = require("node-schedule");
const nodeCron = require("node-cron");

function keepServerActive() {
  // Schedule the API call to run at 9:30 am every day
  //   schedule.scheduleJob("*/13 * * * *", () => {

  //     try {
  //       let data = {
  //         name: "KEEPING SERVER ALIVE 13 MINUTES",
  //         message: "KEEPING SERVER ALIVE 13 MINUTES",
  //       };
  //       // setBool(true);
  //       const res = axios.post(
  //         "https://hpnotepad-test-api.onrender.com/contact",
  //         data
  //       );
  //       console.log("res", res);
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
  //     console.log("Server is active");
  //   });

  nodeCron.schedule("*/13 * * * *", function jobYouNeedToExecute() {
    // Do whatever you want in here. Send email, Make  database backup or download data.
    try {
      let data = {
        name: "cron KEEPING SERVER ALIVE 13 MINUTES",
        message: "cron KEEPING SERVER ALIVE 13 MINUTES",
      };
      // setBool(true);
      const res = axios.post(
        "https://hpnotepad-test-api.onrender.com/contact",
        data
      );
      console.log("res", res);
      if (data.message.length === 0) {
        console.log(res.data.message);
        // setBool(false);
      } else if (res.status === 200) {
        console.log(res.data.message);
        // setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(new Date().toLocaleString());
  });
}

module.exports = keepServerActive;
