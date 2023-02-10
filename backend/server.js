require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const path = require("path");
const keepServerActive = require("./keepServerActive");
const scheduledAPICall = require("./scheduledAPICall");
const connectDB = require("./config/connectDB");
const contactRoute = require("./route/contactRoute");
const logRoute = require("./route/logRoute");
const dataRoute = require("./route/dataRoute");

const app = express();

//Connect to Mongo DB
connectDB();

app.use("/", express.static(path.resolve(path.join(__dirname, "./build"))));

app.use(express.json());
app.use(cors());
console.log("test");

app.use("/contact", contactRoute);
app.use("/log", logRoute);
app.use("/data", dataRoute);

keepServerActive();
// scheduledAPICall();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
