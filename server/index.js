const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

require('./passport');
const routers = require('./routers');

const PORT = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/test', function(req, res) {
    console.log(req.body)
    console.log(new Date())
})

app.use(routers);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))