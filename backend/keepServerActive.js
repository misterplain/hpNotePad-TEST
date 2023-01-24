const axios = require('axios');
const schedule = require("node-schedule");

function keepServerActive() {
  // Schedule the API call to run at 9:30 am every day
  schedule.scheduleJob("*/1 * * * *", () => {
    // Make the API call
    // axios.get('https://example.com/api/keep-alive')
    //   .then(response => {
    //     console.log('Server is active:', response.data);
    //   })
    //   .catch(error => {
    //     console.log('Error:', error);
    //   });
    try {
      let data = {
        name: "KEEPING SERVER ALIVE 13 MINUTES",
        message: "KEEPING SERVER ALIVE 13 MINUTES",
      };
      // setBool(true);
      const res = axios.post(
        "https://hpnotepad-test-api.onrender.com/contact",
        data
      );
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
    console.log("Server is active");
  });
}

module.exports = keepServerActive;
