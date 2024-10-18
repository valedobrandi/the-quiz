import { NextFunction, Request, Response } from 'express';

import { Router } from "express";
import RankingController from "../controllers/ranking.controller";

const rankingController = new RankingController();

const router = Router();

router.get(
    '/',
    (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => rankingController.getRanking(req, res, next),
)

router.post(
    '/',
    (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => rankingController.register(req, res, next),
)

export default router;