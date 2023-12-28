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

// Read
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Update
router.route("/update/:id").put(async (req, res) => {
  const studentId = req.params.id;
  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await Student.findByIdAndUpdate(studentId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "Student updated!", student: update });
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// Delete
router.route("/delete/:id").delete(async (req, res) => {
  const studentId = req.params.id;
  await Student.findByIdAndDelete(studentId)
    .then(() => {
      res.status(200).send({ status: "Student deleted successfully!" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with delete student", error: err.message });
    });
});

module.exports = router;
