import { NextFunction, Request, Response } from 'express';

import { Router } from "express";
import RankingController from "../controllers/ranking.controller";

const rankingController = new RankingController();

const router = Router();

router.get(
    '/:userId',
    (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => rankingController.getRankingByUserId(req, res, next),
)

export default router;