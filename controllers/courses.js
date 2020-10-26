const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()
const CourseModel = mongoose.model("Course")

router.get("/list", (req, res)=> {
    var course = new CourseModel()
    course.courseName = "NodeJS"
    course.courseId = "2"
    course.save()
    CourseModel.find((err, docs) => {
        if(!err) {
            console.log(docs)
            res.send("YEET")
        } else {
            res.send("NO")
        }
    })
})

module.exports = router;