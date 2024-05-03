export const sendToken = async (user, statusCode, res) => {
    try {
        const accessToken = await user.getAccessToken();
        const refreshToken = await user.getRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly: true,
            secure: true,
        }

        res.cookie('accessToken', accessToken, options);
        res.cookie('refreshToken', refreshToken, options);

        return res.status(statusCode).json({ success: true, user })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}