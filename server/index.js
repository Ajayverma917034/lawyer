import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import ErrorThrow from './middleware/Errors.js'
import TaskRouter from './router/task.router.js'
import MeetingRouter from './router/meeting.router.js'
import ReminderRouter from './router/reminder.router.js'
import CaseRouter from './router/case.router.js'
import HearingRouter from './router/hearing.router.js'


// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})

const app = express()
dotenv.config()

// cors
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// Middlewares
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL)
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    next()
})

// Routes
app.use('/api/v1', TaskRouter)
app.use('/api/v1', MeetingRouter)
app.use('/api/v1', ReminderRouter)
app.use('/api/v1', CaseRouter)
app.use('/api/v1', HearingRouter)

// Default route
app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }))
app.use((req, res) => res.status(404).json({ success: false, message: 'Not Found' }))


const PORT = process.env.PORT || 5000

// Database connection
const MongoUrl = 'mongodb://localhost:27017/news'
mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => {
        console.log(err)
    })


// through error
app.use(ErrorThrow)


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Unhandled promise Rejection`);
    server.close(() => {
        server.exit(1);
    })
})