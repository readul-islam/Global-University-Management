"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.notFound = void 0;
const notFound = (req, res, next) => {
    const err = new Error("Route not found");
    err.status = 404;
    return next(err);
};
exports.notFound = notFound;
const globalErrorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Unknown Error",
        error: {
            code: err.status || 500,
            description: err.message || "Unknown Error",
        },
    });
};
exports.globalErrorHandler = globalErrorHandler;
