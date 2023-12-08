import { Types } from "mongoose";
type TRole = "admin" | "student" | "faculty";
type TStatus = "blocked" | "active";
type TUser = {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: TRole;
  name: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNO: string;
  presentAddress: string;
  permanentAddress: string;
  profileImage: string;
  status: TStatus;
  isDeleted: boolean;
};

export {
    TUser
}
