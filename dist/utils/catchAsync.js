"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (fn) => {
    return (req, res, next, data) => {
        Promise.resolve(fn()).catch(err => next(err));
    };
};
exports.default = catchAsync;
