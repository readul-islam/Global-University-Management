"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const semesterName = ["Autumn", "Summer", "Fall"];
const semesterCode = ["01", "02", "03"];
const semesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        enum: semesterName,
    },
    year: {
        type: String,
        require: true,
    },
    code: {
        type: String,
        require: true,
        enum: semesterCode,
    },
    startMonth: {
        type: String,
        require: true,
        enum: months,
    },
    endMonth: {
        type: String,
        require: true,
        enum: months,
    },
}, {
    timestamps: true,
});
