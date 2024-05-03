import Reminder from "../model/reminder.model.js";
import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addRemider = tryCatch(async (req, res, next) => {
    const { title, reminderDate, reminderTime, repeat, recipients, summary } = req.body;

    if (!title) {
        return next(new ErrorHandler(400, "Title is required"))
    }
    if (!reminderDate) {
        return next(new ErrorHandler(400, "Reminder Date is required"))
    }
    if (!reminderTime) {
        return next(new ErrorHandler(400, "Reminder Time is required"))
    }
    if (!repeat) {
        return next(new ErrorHandler(400, "Repeat is required"))
    }
    if (!recipients) {
        return next(new ErrorHandler(400, "Recipients is required"))
    }
    if (!summary) {
        return next(new ErrorHandler(400, "Summary is required"))
    }

    const reminder = new Reminder({
        title,
        reminderDate,
        reminderTime,
        repeat,
        recipients,
        summary
    })

    reminder.save().then(data => {
        res.status(201).json({
            success: true,
            data
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })

})


export const getReminders = tryCatch(async (req, res, next) => {
    let { page, limit } = req.body;
    page = page ? page : 1;
    limit = limit ? limit : 10;
    const currentDate = new Date();
    Reminder.find({ reminderDate: { $gt: currentDate } })
        .sort({ createdAt: -1, })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(data => {
            res.status(200).json({
                success: true,
                data
            })
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
})

export const reminderCount = tryCatch(async (req, res, next) => {
    Reminder.countDocuments().then(count => {
        res.status(200).json({
            totalDocs: count
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
    })
})