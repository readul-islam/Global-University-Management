"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: String,
    password: {
        type: String,
        required: true,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["admin", "student", "faculty"],
    },
    name: String,
    dateOfBirth: String,
    contactNo: String,
    emergencyContactNO: String,
    presentAddress: String,
    permanentAddress: String,
    profileImage: String,
    status: {
        type: String,
        enum: ["blocked", "active"],
        default: "active"
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
