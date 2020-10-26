const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testing", {useNewUrlParser: true}, (error) => {
    if(!error) {
        console.log("Successfully connected")
    } else {
        console.log("error connecting to database")
    }
})

const Course = require("./course.model")