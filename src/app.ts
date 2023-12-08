import cors from "cors";
import express from "express";
import appRouter from "./routes";
import { SuccessResponse } from "./utils";
import { AppError } from "./utils/common";
import { status } from "./config";
import UserController from "./modules/student/controller";


const app = express();

// app parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// App router
app.use("/api/v1", appRouter);

app.get("/",UserController.createStudent);

export default app;
