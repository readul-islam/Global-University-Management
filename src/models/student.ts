import { Schema, Types } from "mongoose";

const guardianSchema = new Schema({}, { _id: false });
const localGuardianSchema = new Schema({}, { _id: false });

const studentSchema = new Schema(
  {
    id: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    code: {
      type: String,
      required: true,
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    academicDepartmentId: {
      type: Schema.Types.ObjectId,
      ref: "department",
    },
  },
  { timestamps: true }
);
