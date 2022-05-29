var express = require("express");
var res = require("express/lib/response");
var router = express.Router();
var db = require("../model/helper");

// Post to suggestions

router.post("/", function (req, res, next) {
  console.log("req.body", req.body);
  db(
    `INSERT INTO suggestions (brand_name, brand_website, brand_info) VALUES ("${req.body.brand_name}", "${req.body.brand_website}", "${req.body.brand_info}");`
  )
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err.message));
});

// Get all suggestions

router.get("/", function (req, res, next) {
  db("SELECT * FROM suggestions;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
