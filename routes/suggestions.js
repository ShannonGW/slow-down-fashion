var express = require("express");
var res = require("express/lib/response");
var router = express.Router();
var db = require("../model/helper");

// Post to suggestions
//http://localhost:5005/suggestions
router.post("/", function (req, res, next) {
  console.log("req.body", req.body);
  db(
    `INSERT INTO suggestions (brand_name, brand_website, brand_info) VALUES ("${req.body.brand_name}", "${req.body.brand_website}", "${req.body.brand_info}");`
  );
  db("SELECT * FROM suggestions;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err.message));
});

// Get all suggestions
//http://localhost:5005/suggestions
router.get("/", function (req, res, next) {
  db("SELECT * FROM suggestions;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// delete suggestion by id

router.delete("/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM suggestions WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
