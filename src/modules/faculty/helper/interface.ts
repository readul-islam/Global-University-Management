import { Types } from "mongoose";

type TFaculty = {
    userId: Types.ObjectId;
    designation: string;
    academicDepartmentId: Types.ObjectId;
    academicFacultyId: Types.ObjectId;
  };
  