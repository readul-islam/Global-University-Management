import { Schema, Types } from "mongoose";

const guardianSchema = new Schema({}, { _id: false });
const localGuardianSchema = new Schema({}, { _id: false });

const studentSchema = new Schema(
  {
    id:String,
    userId: {
      type: Types.ObjectId,
      ref: "user",
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    academicDepartmentId: {
      type: Types.ObjectId,
      ref: "department",
    },
  },
  { timestamps: true }
);

