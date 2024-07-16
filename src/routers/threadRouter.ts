import { Router } from "express";
import * as threadController from "../controllers/threadController"
import uploadMiddleware from "../middlewares/uploads";
import authentication from "../middlewares/authentication";

const threadRouter = Router();

threadRouter.get("/detail/:threadId", threadController.getThread);
threadRouter.get("/user/:userId", threadController.getThreadsByuserId);
threadRouter.get("/", threadController.getThreads);
threadRouter.post("/", authentication, uploadMiddleware(), threadController.createThreads);
threadRouter.put("/:threadId", authentication, uploadMiddleware(), threadController.updateThread);
threadRouter.delete("/:threadId", authentication, threadController.deleteThread);

export default threadRouter;