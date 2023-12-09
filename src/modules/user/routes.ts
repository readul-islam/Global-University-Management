import express from "express";
import UserController from "./controller";
const router = express.Router();
const userRouter = express.Router();

userRouter.post("/create-super-admin", UserController.createSuperAdmin);
userRouter.post("/create-admin", UserController.createAdmin);
userRouter.post("/create-student", UserController.createStudent);
userRouter.post("/create-faculty", UserController.createFaculty);

router.use("/user", userRouter);
export default router;
