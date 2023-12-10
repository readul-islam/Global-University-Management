"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidatorSchema = void 0;
const zod_1 = require("zod");
const userValidatorSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "email is required",
        invalid_type_error: "email must be a valid email",
    })
        .email(),
    password: zod_1.z
        .string({
        invalid_type_error: "password must be a string",
    })
        .max(20, { message: "password can't be more than 20 characters" })
        .min(6, { message: "password can't be less than 6 characters" })
        .optional(),
});
exports.userValidatorSchema = userValidatorSchema;
