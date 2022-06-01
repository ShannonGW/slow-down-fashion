var express = require("express");
var res = require("express/lib/response");
var router = express.Router();
var db = require("../model/helper");

router.get("/", function (req, res, next) {
  res.send("You are an index");
});

/* GET home page.*/
router.get("/wardrobe", function (req, res, next) {
  db(`SELECT * FROM wardrobe;`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get("/wardrobe/:id", function (req, res, next) {
  console.log(req.params.id, " get id ");

  db(`SELECT * FROM wardrobe WHERE id=${req.params.id};`)
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

router.get("/wardrobe/item/:clothesCategory", function (req, res, next) {
  console.log("i am here");
  db(
    `SELECT * FROM wardrobe WHERE clothesCategory="${req.params.clothesCategory}";`
  )
    .then((results) => {
      console.log(results);
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/wardrobe", function (req, res, next) {
  console.log(req.body, "is the body");
  db(
    `INSERT INTO wardrobe (clothesCategory, clothesImage) VALUES ("${req.body.clothesCategory}", "${req.body.clothesImage}");`
  )
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err.message));
});

router.delete("/wardrobe/:id", function (req, res) {
  console.log(req.params, "is the params");
  db(`DELETE FROM wardrobe WHERE id=${req.params.id};`)
    .then((results) => res.send(results))
    .catch((err) => res.status(500).send(err));
});

//--------------------REHOME PUT---------------------------------//
//works in Postman
router.put("/wardrobe/:id", (req, res) => {
  db(
    `UPDATE wardrobe SET complete = ${req.body.complete}  WHERE id = ${req.params.id};`
  ).then(() => {
    db("SELECT * FROM wardrobe WHERE complete = 1 ORDER BY id ASC;").then(
      (results) => {
        res.send(results.data);
      }
    );
  });
});

// router.put("/rehome", (req, res) => {
//   //variable names need to match front end
//   const clothesCategory = req.bodyclothesCategory;
//   const clothesImage = req.body.clothesImage;

//   console.log(req.body);
//   db(
//     `UPDATE users SET task_id = ${task_id}  WHERE id = ${user_id} OR id = ${user_id2};`
//   ).then(() => {
//     db(`SELECT group_concat(users.user_name separator ' and ') as users,
//         tasks.task_name
//         FROM users
//         INNER JOIN tasks ON tasks.id = users.task_id
//         WHERE users.task_id is not null
//        GROUP BY task_name;`)
//       .then((results) => {
//         res.send(results.data);
//       })
//       .catch((err) => res.status(500).send(err));
//   });
// });

module.exports = router;
