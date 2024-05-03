import express from 'express'

import { casesCount, createCase, getCases } from '../controller/case.controller.js'

const CaseRouter = express.Router()

CaseRouter.post('/create-case', createCase)
CaseRouter.post('/get-cases', getCases)
CaseRouter.post('/all-case-count', casesCount)

export default CaseRouter