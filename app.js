const express = require("express");
const cors = require("cors");

const app = express();

const songsController = require("./controllers/songController")

app.use(cors());
app.use(express.json());

app.use("/api/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get('/songs', async (req, res) => {
  try {
    const songs = await db.any('SELECT * FROM songs');
    res.json(songs);
  } catch (error) {
    console.error('Error retrieving songs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
