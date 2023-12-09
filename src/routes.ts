import express from 'express';
import userRoutes from './modules/user/routes';

const appRouter = express.Router();


appRouter.use(userRoutes)


export default appRouter;