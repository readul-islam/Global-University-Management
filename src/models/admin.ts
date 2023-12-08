import { Schema, Types } from "mongoose";


const adminSchema = new Schema(
    {
      userId: {
        type: Types.ObjectId,
        ref: "user",
      },
      designation: String,
      managementDepartmentId: {
        type: Types.ObjectId,
        ref: "management-department",
      },
    },
    { timestamps: true }
  );
  