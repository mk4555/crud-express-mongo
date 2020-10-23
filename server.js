const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen(3000, function() {
    console.log('listening on 3000')
})
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log("HELLO")
    console.log(req.body)
})
console.log("May Node be with you")