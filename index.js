const cors = require('cors')
const express = require('express')
const os = require('os')
const port = 4000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
     return res.status(200).json({ msg: `Hello ${os.hostname}` })
})

app.listen(port, () => {
     console.log(`API RUNNING ON ${port}`)
})