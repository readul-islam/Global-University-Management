"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const facultySchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        ref: "user",
    },
    designation: String,
    academicDepartmentId: {
        type: mongoose_1.Types.ObjectId,
        ref: "department",
    },
    academicFacultyId: {
        type: mongoose_1.Types.ObjectId,
        ref: "academic-faculty",
    },
}, { timestamps: true });
