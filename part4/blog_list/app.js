const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const listsRouter = require('./controllers/blog_lists')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

mongoose.set('strictQuery', false)

logger.info('connecting to', 'mongodatabase')

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', listsRouter)

module.exports = app