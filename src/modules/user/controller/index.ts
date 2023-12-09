import {
  createAdmin,
  createFaculty,
  createStudent,
  createSuperAdmin,
} from "../services";
import { SuccessResponse } from "../../../utils";
import CatchAsync from "../../../utils/catchAsync";

class UserController extends CatchAsync {
  createSuperAdmin = this.handleRequestWrapper(createSuperAdmin, "super admin");
  createAdmin = this.handleRequestWrapper(createAdmin, "admin");
  createStudent = this.handleRequestWrapper(createStudent, "student");
  createFaculty = this.handleRequestWrapper(createFaculty, "faculty");
}

export default new UserController();
