import Case from "../model/case.mode.js";
import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createCase = tryCatch(async (req, res, next) => {
    let { name, practiceArea, arrivalDate, clientName, clientPosition, description, refNumber } = req.body;
    if (!name) {
        return next(new ErrorHandler(400, "Name is required"))
    }
    if (!practiceArea) {
        return next(new ErrorHandler(400, "Practice Area is required"))
    }

    if (!arrivalDate) {
        return next(new ErrorHandler(400, "Arrival Date is required"))
    }
    if (!clientName) {
        return next(new ErrorHandler(400, "Client Name is required"))
    }
    if (!clientPosition) {
        return next(new ErrorHandler(400, "Client Position is required"))
    }
    if (!description) {
        return next(new ErrorHandler(400, "Description is required"))
    }
    if (!refNumber) {
        return next(new ErrorHandler(400, "Ref Number is required"))
    }

    const newCase = new Case({
        name,
        practiceArea,
        arrivalDate,
        clientName,
        clientPosition,
        description,
        refNumber
    })

    newCase.save().then(data => {
        res.status(201).json({
            success: true,
            data
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})

export const getCases = tryCatch(async (req, res, next) => {
    let { page, limit } = req.body;
    page = page ? page : 1;
    limit = limit ? limit : 10;

    Case.find()
        .sort({ createdAt: -1, })
        .skip((page - 1) * limit)
        .limit(limit)
        .then(cases => {
            res.status(200).json({
                success: true,
                cases
            })
        }).catch(err => {
            return next(new ErrorHandler(400, err.message))
        })
})

export const casesCount = tryCatch(async (req, res, next) => {
    Case.countDocuments().then(count => {
        res.status(200).json({
            totalDocs: count
        })
    }).catch(err => {
        return next(new ErrorHandler(400, err.message))
    })
})