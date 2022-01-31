const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.get("/:url", async (req, res) => {
  const response = await axios.get(req.params.url);
  res.json(response);
});
app.post("/:url", async (req, res) => {
  const response = await axios.post(req.params.url);
  res.json(response);
});
app.put("/:url", async (req, res) => {
  const response = await axios.put(req.params.url);
  res.json(response);
});
app.delete("/:url", async (req, res) => {
  const response = await axios.delete(req.params.url);
  res.json(response);
});
