import express from 'express'
import { TaskCount, addTask, getTasks } from '../controller/task.controller.js'

const TaskRouter = express.Router()

TaskRouter.post('/create-task', addTask)
TaskRouter.post('/get-tasks', getTasks)
TaskRouter.post('/all-task-count', TaskCount)

export default TaskRouter