const { default: axios } = require("axios");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/:url", async (req, res) => {
  try {
    const response = await axios.get(req.params.url);
    res.json(response);
  } catch (err) {
    res.json({ error: err });
  }
});
app.post("/:url", async (req, res) => {
  try {
    const response = await axios.post(req.params.url);
    res.json(response);
  } catch (err) {
    res.json({ error: err });
  }
});
app.put("/:url", async (req, res) => {
  try {
    const response = await axios.put(req.params.url);
    res.json(response);
  } catch (err) {
    res.json({ error: err });
  }
});
app.delete("/:url", async (req, res) => {
  try {
    const response = await axios.delete(req.params.url);
    res.json(response);
  } catch (err) {
    res.json({ error: err });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
