import tryCatch from "../utils/asyncFunction.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = tryCatch(async (req, res, next) => {
    try {
        const incommingToken = req.cookies?.accessToken || req.header('Authorization').split(' ')[1];

        if (!incommingToken) {
            // 
        }

        else {
            const decodedData = jwt.verify(incommingToken, process.env.ACCESS_TOKEN_SECRET);

            if (!decodedData) {
                return next(new ErrorHandler(401, 'Unauthorized request'));
            }

            const user = await User.findById(decoded.id)
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
})
