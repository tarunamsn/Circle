import { Router } from "express";
import * as replyController from "../controllers/replyController"
import uploadMiddleware from "../middlewares/uploads";
import authentication from "../middlewares/authentication";

const replyRouter = Router();

replyRouter.post("/reply/:threadId", authentication, uploadMiddleware(), replyController.createReply);
replyRouter.put("/reply/:replyId", authentication, uploadMiddleware(), replyController.updateReply);
replyRouter.delete("/reply/:replyId", authentication, replyController.deleteReply);

export default replyRouter;