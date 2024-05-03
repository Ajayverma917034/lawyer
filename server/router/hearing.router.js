import express from 'express'
import { HearingCount, addHearing, getHearings } from '../controller/hearing.controller.js'

const HearingRouter = express.Router()

HearingRouter.post('/create-hearing', addHearing)
HearingRouter.post('/get-hearings', getHearings)
HearingRouter.post('/all-hearing-count', HearingCount)

export default HearingRouter