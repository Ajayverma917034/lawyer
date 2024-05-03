import Hearing from "../model/hearing.model.js";
import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addHearing = tryCatch(async (req, res, next) => {
    let { name, hearingType, hearingDate, hearingTime, assignee, timeSpent } = req.body;

    if (!name) {
        return next(new ErrorHandler(400, "Name is required"))
    }
    if (!hearingType) {
        return next(new ErrorHandler(400, "Hearing Type is required"))
    }
    if (!hearingDate) {
        return next(new ErrorHandler(400, "Hearing Date is required"))
    }
    if (!hearingTime) {
        return next(new ErrorHandler(400, "Hearing Time is required"))
    }
    if (!assignee) {
        return next(new ErrorHandler(400, "Assignee is required"))
    }
    if (!timeSpent) {
        return next(new ErrorHandler(400, "Time Spent is required"))
    }
    const hearing = new Hearing({
        name,
        hearingType,
        hearingDate,
        hearingTime,
        assignee,
        timeSpent
    })

    hearing.save().then(data => {
        res.status(201).json({
            success: true,
            data
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})

export const getHearings = tryCatch(async (req, res, next) => {
    let { page, limit } = req.body;
    page = page ? page : 1;
    limit = limit ? limit : 10;

    Hearing.find()
        .sort({ createdAt: -1, })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(hearings => {
            res.status(200).json({
                success: true,
                hearings
            })
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
})

export const HearingCount = tryCatch(async (req, res, next) => {
    Hearing.countDocuments().then(count => {
        res.status(200).json({
            totalDocs: count
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})