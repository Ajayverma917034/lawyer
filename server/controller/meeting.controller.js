import Meeting from "../model/meeting.model.js";
import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";

export const MeetingCreate = tryCatch(async (req, res, next) => {
    const { title, startDate, startTime, endDate, endTime, relatedMatter, description, location, meetingType } = req.body;
    if (!title) {
        return next(new ErrorHandler(400, "Title is required"))
    }
    if (!startDate) {
        return next(new ErrorHandler(400, "Start Date is required"))
    }
    if (!startTime) {
        return next(new ErrorHandler(400, "Start Time is required"))
    }
    if (!endDate) {
        return next(new ErrorHandler(400, "End Date is required"))
    }
    if (!endTime) {
        return next(new ErrorHandler(400, "End Time is required"))
    }
    if (!relatedMatter) {
        return next(new ErrorHandler(400, "Related Matter is required"))
    }
    if (!description) {
        return next(new ErrorHandler(400, "Description is required"))
    }
    if (!location) {
        return next(new ErrorHandler(400, "Location is required"))
    }
    if (!meetingType) {
        return next(new ErrorHandler(400, "Meeting Type is required"))
    }
    const meeting = new Meeting({
        title,
        startDate,
        startTime,
        endDate,
        endTime,
        relatedMatter,
        description,
        location,
        meetingType
    })

    meeting.save().then(data => {
        res.status(201).json({
            success: true,
            data
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})

export const MeetingList = tryCatch(async (req, res, next) => {
    let { page, limit } = req.body;
    page = page ? page : 1;
    limit = limit ? limit : 10;
    const currentDate = new Date();
    Meeting.find({ startDate: { $gt: currentDate } })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(meetings => {
            res.status(200).json({
                success: true,
                meetings
            })
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
})

export const MeetingCount = tryCatch(async (req, res, next) => {
    const currentDate = new Date();
    Meeting.find({ startDate: { $gt: currentDate } })
        .countDocuments()
        .then(count => {
            res.status(200).json({
                totalDocs: count
            })
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
})