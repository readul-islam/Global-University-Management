"use strict";
// SuccessResponse
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.ErrorResponse = exports.SuccessResponse = void 0;
// successResponse
const SuccessResponse = (res, message, code = 200, data) => {
    res.status(code).json({
        code: code,
        success: true,
        message: message,
        data: data,
    });
};
exports.SuccessResponse = SuccessResponse;
// ErrorResponse
const ErrorResponse = (res, message, statusCode = 500) => {
    res.send({
        success: false,
        message,
        error: {
            code: statusCode,
            description: message,
        },
    });
};
exports.ErrorResponse = ErrorResponse;
// Custom throw Error
class AppError {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}
exports.AppError = AppError;
