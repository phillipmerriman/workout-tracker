const express = require("express");
const { Workout } = require("../models");

// Export all the routes in one function
module.exports = function (app) {

  // Get workouts
  app.get("/api/workouts", (req, res) => {
    Workout
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  // Get workouts range
  app.get("/api/workouts/range", (req, res) => {
    Workout
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  // Create workout
  app.post("/api/workouts", (req, res) => {
    console.log("workouts post!!!!!", req.body);
    Workout
      .create(req.body)
      .then((data) => {
        console.log(".then", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  // Update workout by id
  app.put("/api/workouts/:id", (req, res) => {
    console.log("workouts PUT!!!!!!!!!", req.body);
    Workout.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      {
        $push: {
          exercises: req.body
        }
      }) .then((data) => {
        console.log(".then", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
}
