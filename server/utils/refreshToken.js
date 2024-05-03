import User from "../model/user.model";
import tryCatch from "./asyncFunction";
import ErrorHandler from "./errorHandler";

const refreshAccessToken = tryCatch(async (req, res, next) => {
    try {
        const incommingToken = req.cookies?.refreshToken || req.body?.refreshToken;

        if (!incommingToken) {
            return next(new ErrorHandler(401, 'Unauthorized request'));
        }

        const decodedToken = jwt.verify(incommingToken, process.env.REFRESH_TOKEN_SECRET);

        if (!decodedToken) {
            return next(new ErrorHandler(401, 'Unauthorized request'));
        }
        const user = await User.findById(decodedToken.id);

        if (!user) {
            return next(new ErrorHandler(401, 'Invalid refresh token'));
        }
        if (incommingToken !== user.refreshToken) {
            return next(new ErrorHandler(401, 'Refresh token not valid'));
        }

        const accessToken = await user.getAccessToken()
        const refreshToken = await user.getRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        const accessCookieOptions = {
            httpOnly: true,
            secure: true,
        }
        const refreshCookieOptions = {
            httpOnly: true,
            secure: true
        }
        res.cookie('refreshToken', refreshToken, refreshCookieOptions)
        res.cookie('accessToken', accessToken, accessCookieOptions)
        req.user = user;
        next();


    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
})

export default refreshAccessToken;