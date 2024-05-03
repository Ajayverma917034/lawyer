import express from 'express'
import { addRemider, getReminders, reminderCount } from '../controller/reminder.controller.js'

const ReminderRouter = express.Router()

ReminderRouter.post('/create-reminder', addRemider)
ReminderRouter.post('/get-reminders', getReminders)
ReminderRouter.post('/all-reminder-count', reminderCount)

export default ReminderRouter