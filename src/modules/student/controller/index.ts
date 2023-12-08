import { RequestHandler } from "express";
import { createStudent, getStudent } from "../service";
import { TUserController } from "../helper/interface";




class UserController implements TUserController {
  async createStudent() {
    const student = await createStudent();
  }
  async getStudent() {
    const student = await getStudent();
  }



}





export default new UserController;
