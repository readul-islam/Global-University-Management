import { RequestHandler } from "express"
import { Types } from "mongoose";

type TUserController ={
    createStudent:RequestHandler,
    getStudent:RequestHandler,
}
type TAdmin = {
    userId: Types.ObjectId;
    designation: string;
    academicDepartmentId: Types.ObjectId;
  };
  
  type TGuardian ={}
  type TLocalGuardian ={}
  
  


type TStudent = {
    userId:Types.ObjectId;
  
    guardian:TGuardian;
    localGuardian:TLocalGuardian;
    academicDepartmentId: Types.ObjectId;
}



export {
    TUserController
}