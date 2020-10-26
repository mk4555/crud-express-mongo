const connection = require("./model")
const express = require("express")
const app = express()
const path = require("path")
const expressHandlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const CourseController = require("./controllers/courses")
app.use(bodyparser.urlencoded({
    extended: true
}))

app.set("views", path.join(__dirname, "/views/"))
app.engine("hbs", expressHandlebars({
    extname : "hbs", 
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}))

app.set("view engine", "hbs")

app.use("/course", CourseController)

app.listen("4000", () => {
    console.log("Server started")
})