const express = require("express");

const songs = express.Router();
const { getAllSongs, getSong, createSong} = require("../queries/songs")
const { checkName, checkBoolean } = require("../validations/checkSongs")
songs.get("/", async (req, res) => {
  
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ message: "No songs found" });
    }
});


// SHOW
songs.get('/:id', async (req, res) => {
  const { id } = req.params
  const song = await getSong(id)
  if (song) {
    res.json(song)
  } else {
    res.status(404).json({ error: 'not found' })
  }
})

// CREATE
songs.post("/", checkBoolean, checkName, async (req, res) => {
  try {
    const song = await createSong(req.body)
    res.json(song)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

songs.put("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Update item at id: ${id}` });
});

songs.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Delete Item based on id: ${id}` });
});

module.exports = songs;