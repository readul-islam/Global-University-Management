"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const guardianSchema = new mongoose_1.Schema({}, { _id: false });
const localGuardianSchema = new mongoose_1.Schema({}, { _id: false });
const studentSchema = new mongoose_1.Schema({
    id: String,
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    code: {
        type: String,
        required: true,
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    academicDepartmentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "department",
    },
}, { timestamps: true });
