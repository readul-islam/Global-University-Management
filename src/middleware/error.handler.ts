import { ErrorRequestHandler, RequestHandler } from "express";

const notFound: RequestHandler = (req, res, next) => {
  const err = new Error("Route not found") as any;
  err.status = 404;
  return next(err);
};

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Unknown Error",
    error: {
      code: err.status || 500,
      description: err.message || "Unknown Error",
    },
  });
};


export {
    notFound,
    globalErrorHandler
}