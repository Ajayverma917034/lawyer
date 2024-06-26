const tryCatch = controller => async (req, res, next) => {
    Promise.resolve(controller(req, res, next)).catch(next)
}

export default tryCatch