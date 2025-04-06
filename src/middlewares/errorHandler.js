// middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
    console.error(err); // Log it

    res.status(500).json({
        error: "Internal Server Error",
        message: err.message || "Something went wrong",
    });
};