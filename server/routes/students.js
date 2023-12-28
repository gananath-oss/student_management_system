const router = require("express").Router();
let Student = require("../models/student");

// CRUD operations

// Create
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student added!");
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
