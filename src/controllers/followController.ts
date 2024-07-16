import *as followService from "../services/followService"
import { Request, Response } from "express"
import { errorHandler } from "../utils/errorHandler";

export const follow = async (req: Request, res: Response) => {
    try {
        const followerId = req.params.followerId
        const followingId = res.locals.userId

        if (followerId == followingId) return res.status(400).json({
            message: "You fool! You think you can follow yourself?"
        })

        return res.status(200).json(await followService.follow(followerId, followingId))
    } catch (error) {
        console.log(error);
        return errorHandler(error, res);
    }
}