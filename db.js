require('dotenv').config()
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL).then(() => {
    console.log("Mongo connected to DB");
})

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,  
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

