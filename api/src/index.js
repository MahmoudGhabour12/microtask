const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const user = require('./routers/user')
const detail = require('./routers/detail')
const app = express()
app.use(cors())
app.use(express.json())
app.use(detail)
app.use(user)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 