const express = require("express");
const db = require("../data/connection");
const router = express.Router();

router.post("/", (req, res) => {
  db("automobiles")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ result: ids });
    })
    .catch(error => {
      res.status(500).json({ message: "server error" });
    });
});

router.get("/", (req, res) => {
  db("automobiles")
    .then(data => {
      res.status(200).json({ results: data });
    })
    .catch(error => {
      res.status(500).json({ message: "server error" });
    });
});

module.exports = router;
