const connectToMongo = require('./db');
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

connectToMongo();
const port = 5000


app.use(express.json())
app.get('/', (req, res)=>{
    res.send("Hi")
})
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
