var express = require("express");

var router = express();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.body);
  let id = req.params.id;
  try {
    burger.updateOne(req.body, id, function (data) {
      // console.log(data);
      if (data.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
