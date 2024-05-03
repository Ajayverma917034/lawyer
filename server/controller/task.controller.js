import { now } from "mongoose";
import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";
import Task from "../model/task.model.js";

export const addTask = tryCatch(async (req, res, next) => {
    const { title, taskType, assignTo, dueDate, description, matterRelation, relatedDocument } = req.body;
    if (!title) {
        return next(new ErrorHandler(400, "Title is required"))
    }
    if (!taskType) {
        return next(new ErrorHandler(400, "Task Type is required"))
    }
    if (!assignTo) {
        return next(new ErrorHandler(400, "Assign To is required"))
    }
    if (!dueDate) {
        return next(new ErrorHandler(400, "Due Date is required"))
    }
    if (!description) {
        return next(new ErrorHandler(400, "Description is required"))
    }
    if (!matterRelation) {
        return next(new ErrorHandler(400, "Matter Relation is required"))
    }
    // if(!relatedDocument){
    //     return next(new ErrorHandler(400, "Related Document is required"))
    // }

    const task = new Task({
        title,
        taskType,
        assignTo,
        dueDate,
        description,
        matterRelation,
        relatedDocument
    })

    task.save().then(data => {
        res.status(201).json({
            success: true,
            data
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})

export const getTasks = tryCatch(async (req, res, next) => {
    let { page, limit } = req.body;
    page = page ? page : 1;
    limit = limit ? limit : 10;

    const currentDate = new Date();

    Task.find({ dueDate: { $gt: currentDate } })
        .sort({ createdAt: -1, })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(tasks => {
            res.status(200).json({
                success: true,
                tasks
            })
        })
        .catch(err => {
            return next(new ErrorHandler(400, err.message))
        })

})

export const TaskCount = tryCatch(async (req, res, next) => {
    Task.countDocuments().then(count => {
        res.status(200).json({
            totalDocs: count
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})