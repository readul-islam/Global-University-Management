import { Schema, Types } from "mongoose";



  const facultySchema = new Schema({
    userId: {
      type: Types.ObjectId,
      ref: "user",
    },
    designation: String,
    academicDepartmentId: {
      type: Types.ObjectId,
      ref: "department",
    },
    academicFacultyId: {
      type: Types.ObjectId,
      ref: "academic-faculty",
    },
  },{timestamps:true});
  