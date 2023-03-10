const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const client = axios.create({
  headers: { Authorization: "Bearer " + process.env.API_KEY },
});

const params = {
  model: "text-davinci-003",
  prompt: "tell me one random name",
  max_tokens: 56,
  temperature: 0.5,
};

client
  .post("https://api.openai.com/v1/completions", params)
  .then((result) => console.log(result.data.choices[0].text))
  .catch((err) => console.log(err));
