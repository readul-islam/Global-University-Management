import { Request, RequestHandler, Response, NextFunction } from "express";
import { SuccessResponse } from "./common";

// const catchAsyncFn = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction, data: Object) => {
//     Promise.resolve(fn()).catch((err) => next(err));
//   };
// };


class CatchAsync {
  protected handleRequestWrapper(
    handler: (req: Request) => Promise<any>,
    successMessage: string
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log(successMessage);
        const result = await handler(req);
        SuccessResponse(res, successMessage, 200, result);
      } catch (error) {
        next(error);
      }
    };
  }

}

export default  CatchAsync;
