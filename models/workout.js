const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create workout model
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      distance: {
        type: Number,
        required: true,
      },

      weight: {
        type: Number,
        required: true,
      },

      reps: {
        type: Number,
        required: true,
      },

      sets: {
        type: Number,
        required: true,
      },
    },
  ],
  
},
{
  toJSON: {
    virtuals: true,
  },
}
);

// Reduce durations of multiple exercises to total duration of workout
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    console.log(total, exercise);
    return total + exercise.duration;
  }, 0);
});

// Export workout model
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
