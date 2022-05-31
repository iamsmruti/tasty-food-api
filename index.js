import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import foodRoutes from './routes/foods.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}))

app.use('/api/foods', foodRoutes)

const URL = process.env.DB_URL
const PORT = process.env.PORT || 4500

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(
    () => app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`))
)
