import mongoose, { Schema, Types, model } from "mongoose";
import { TUser } from "../modules/user/helper/interface";

const userSchema = new Schema<TUser>(
  {
    email: String,
    password: {
        type:String,
        required:true,
    },
    needsPasswordChange: {
        type:Boolean,
        default:true
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
      default:"active"
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model<TUser>("user", userSchema);

export default User;
