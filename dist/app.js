"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const controller_1 = __importDefault(require("./modules/student/controller"));
const app = (0, express_1.default)();
// app parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// App router
app.use("/api/v1", routes_1.default);
app.get("/", controller_1.default.createStudent);
exports.default = app;
