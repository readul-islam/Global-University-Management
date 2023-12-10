"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const validator_1 = __importDefault(require("../../middleware/validator"));
const userValidatorSchema_1 = require("./helper/userValidatorSchema");
const router = express_1.default.Router();
const userRouter = express_1.default.Router();
userRouter.delete("/create-super-admin", (0, validator_1.default)(userValidatorSchema_1.userValidatorSchema), controller_1.default.createSuperAdmin);
userRouter.post("/create-admin", controller_1.default.createAdmin);
userRouter.post("/create-student", controller_1.default.createStudent);
userRouter.post("/create-faculty", controller_1.default.createFaculty);
router.use("/user", userRouter);
exports.default = router;
