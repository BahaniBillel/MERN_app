const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
},{timestamps:true});

// Important note !
//  the Schema defines the structure of a particular document or a type of document inside the database
//whereas the model apply that schema to a particular model 

module.exports= mongoose.model('Workout',workoutSchema) //  this the model we export 'Workout'