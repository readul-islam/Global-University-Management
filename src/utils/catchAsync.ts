import { Request, RequestHandler, Response,NextFunction } from 'express';


const catchAsync = (fn:any)=>{

    return (req:Request, res: Response, next:NextFunction, data:Object)=>{
        Promise.resolve(fn()).catch(err => next(err))
    }
}



export default catchAsync