import express from 'express'
import { MeetingCount, MeetingCreate, MeetingList } from '../controller/meeting.controller.js'

const MeetingRouter = express.Router()

MeetingRouter.post('/create-meeting', MeetingCreate)

MeetingRouter.post('/get-meetings', MeetingList)
MeetingRouter.post('/all-meeting-count', MeetingCount)

export default MeetingRouter
