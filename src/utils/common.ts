// SuccessResponse

import { Response } from "express";

type TSuccessResponse = (
  res: Response,
  message: string,
  code: number,
  data: any
) => void;
type TErrorResponse = (
  res: Response,
  message: string,
  statusCode: number
) => void;

// successResponse
const SuccessResponse: TSuccessResponse = (res, message, code = 200, data) => {
  res.status(code).json({
    code: code,
    success: true,
    message: message,
    data: data,
  });
};

// ErrorResponse
const ErrorResponse: TErrorResponse = (res, message, statusCode = 500) => {
  res.send({
    success: false,
    message,
    error: {
      code: statusCode,
      description: message,
    },
  });
};

// Custom throw Error
class AppError {
  message: string;
  status: number;
  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}



export { SuccessResponse, ErrorResponse, AppError };
