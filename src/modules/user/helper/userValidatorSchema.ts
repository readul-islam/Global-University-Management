import { z } from "zod";

const userValidatorSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a valid email",
    })
    .email(),
  password: z
    .string({
      invalid_type_error: "password must be a string",
    })
    .max(20, { message: "password can't be more than 20 characters" })
    .min(6, { message: "password can't be less than 6 characters" })
    .optional(),
});

export { userValidatorSchema };
