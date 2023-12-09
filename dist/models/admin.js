"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        ref: "user",
    },
    designation: String,
    managementDepartmentId: {
        type: mongoose_1.Types.ObjectId,
        ref: "management-department",
    },
}, { timestamps: true });
