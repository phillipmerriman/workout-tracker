const express = require("express");
const { Workout } = require("../models");

module.exports = function (app) {
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

  app.post("/api/workouts", (req, res) => {
    console.log("workouts post!!!!!", req.body);
    Workout
      .create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log("workouts PUT!!!!!!!!!", req.body);
    Workout.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
          modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });

}

//only do "/api" when you're doing a put or post
