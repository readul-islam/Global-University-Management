"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
class UserController extends catchAsync_1.default {
    constructor() {
        super(...arguments);
        this.createSuperAdmin = this.handleRequestWrapper(services_1.createSuperAdmin, "super admin");
        this.createAdmin = this.handleRequestWrapper(services_1.createAdmin, "admin");
        this.createStudent = this.handleRequestWrapper(services_1.createStudent, "student");
        this.createFaculty = this.handleRequestWrapper(services_1.createFaculty, "faculty");
    }
}
exports.default = new UserController();
