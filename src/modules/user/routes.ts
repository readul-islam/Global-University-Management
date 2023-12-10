import express from "express";
import UserController from "./controller";
import validator from "../../middleware/validator";
import { userValidatorSchema } from "./helper/userValidatorSchema";

const router = express.Router();
const userRouter = express.Router();

userRouter.delete("/create-super-admin",validator(userValidatorSchema), UserController.createSuperAdmin);
userRouter.post("/create-admin", UserController.createAdmin);
userRouter.post("/create-student", UserController.createStudent);
userRouter.post("/create-faculty", UserController.createFaculty);

router.use("/user", userRouter);
export default router;
