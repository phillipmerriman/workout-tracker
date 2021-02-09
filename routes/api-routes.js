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
        console.log(".then", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  // app.put("/api/workouts/:id", (req, res) => {
  //   console.log("workouts PUT!!!!!!!!!", req.body);
  //   Workout.findByIdAndUpdate(
  //     {
  //       _id: req.params.id
  //     },
  //     {
  //       $push: {
  //         exercises: res.body
  //       }
  //     },
  //     (error, data) => {
  //       if (error) {
  //         res.send(error);
  //       } else {
  //         res.json(data);
  //       }
  //     }
  //   );
  // });

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




//only do "/api" when you're doing a put or post
