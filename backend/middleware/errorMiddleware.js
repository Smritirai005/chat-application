const errorHandler = (err, req, res, next) => {
    // If the statusCode is not set, default to 500 (Internal Server Error)
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = errorHandler;
