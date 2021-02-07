const workoutSchema = new Schema({
    exercises: {
      type: String,
      trim: true,
      required: "String is Required"
    },
    number: {
      type: Number,
      unique: true,
      required: true
    },
    email: {
      type: String,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  
    boolean: Boolean,
  
    array: Array,
  
    date: {
      type: Date,
      default: Date.now
    },
    longstring: {
      type: String,
      validate: [({ length }) => length >= 6, "Longstring should be longer."]
    }
  });