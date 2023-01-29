const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  joke: {
    setup: {
      type: String,
      required: true,
    },
    punchline: {
      type: String,
      required: true,
    },
  },
  horoscope: {
    aries: {
      type: String,
      required: true,
    },
    taurus: {
      type: String,
      required: true,
    },
    gemini: {
      type: String,
      required: true,
    },
    cancer: {
      type: String,
      required: true,
    },
    leo: {
      type: String,
      required: true,
    },
    virgo: {
      type: String,
      required: true,
    },
    libra: {
      type: String,
      required: true,
    },
    scorpio: {
      type: String,
      required: true,
    },
    sagittarius: {
      type: String,
      required: true,
    },
    capricorn: {
      type: String,
      required: true,
    },
    aquarius: {
      type: String,
      required: true,
    },
    pisces: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Data", dataSchema);
